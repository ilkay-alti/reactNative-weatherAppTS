import {Text, View} from 'react-native';
import React, {FC, useEffect} from 'react';
import styles from './HomeScreen.style';
import HeaderComponent from '../../components/Header/HeaderComponent';
import BikeIcon from '../../../assets/svg/Bike';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppSelector} from '../../redux/hooks';
import ClearIcon from '../../../assets/svg/Day/Clear';
import FooterComponent from '../../components/Footer/FooterComponent';
interface IHomeScreen {
  navigation: any;
}

const HomeScreen: FC<IHomeScreen> = ({}) => {
  const weather = useAppSelector(state => state.weatherSlice.data);
  const [weatherData, setWeatherData] = React.useState<any>(null);
  const data = JSON.parse(weatherData);

  const storeData = async () => {
    try {
      if (weather !== null) {
        const jsonValue = JSON.stringify(weather);
        await AsyncStorage.setItem('@storage_weatherData', jsonValue);
      }
    } catch (e) {
      // saving error
      ('Home Error');
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_weatherData');
      if (value !== null) {
        setWeatherData(value);
      }
    } catch (e) {
      // error reading value
      console.log('Home GETDATA ERROR');
    }
  };
  useEffect(() => {
    storeData();
    getData();
  });

  return (
    <View style={styles.container}>
      <HeaderComponent />
      <View style={styles.headerContainer}>
        <Text style={styles.mainText}>
          Feels Like A good {'\n'}time to ride a bike
        </Text>
        <View style={styles.headerIconContainer}>
          <BikeIcon width={24} height={24} color={'#09151E'} />
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.bodyContainer}>
          <Text style={styles.mainContainerText}>Today's Like</Text>
          <Text style={styles.mainContainerDegree}>
            {data?.current.temp_c}°
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <ClearIcon width={84} height={84} color={'#fff'} />
        </View>
      </View>
      <FooterComponent />
    </View>
  );
};

export default HomeScreen;
