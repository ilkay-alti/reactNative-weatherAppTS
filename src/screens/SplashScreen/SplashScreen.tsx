import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import React, {FC, useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {useAppDispatch} from '../../redux/hooks';
import {fetchWeather} from '../../redux/weatherSlice';
import styles from './SplashScreen.style';
interface ISplashPage {
  navigation: any;
}
const SplashScreen: FC<ISplashPage> = ({navigation}) => {
  const dispatch = useAppDispatch();

  const location = async () => {
    try {
      Geolocation.getCurrentPosition(info => {
        AsyncStorage.setItem(
          'location',
          JSON.stringify({
            long: info.coords.longitude,
            lat: info.coords.latitude,
          }),
        );
      });
    } catch (e) {
      console.log("can't fetch weather data");
    }
  };

  const setMode = async () => {
    try {
      await AsyncStorage.setItem('mode', 'null');
    } catch (e) {
      console.log("can't mode data");
    }
  };
  const getStorage = async () => {
    await AsyncStorage.getItem('location').then(value => {
      if (value) {
        console.log("can't fetch weather data");
        dispatch(fetchWeather(JSON.parse(value)));
        navigation.navigate('Homes');
      }
    });
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_weatherData');
      if (value !== null) {
        navigation.navigate('Homes');
      } else {
        location();
        getStorage();
      }
    } catch (e) {
      // error reading value
    }
  };

  const firstStart = async () => {
    try {
      const locationData = await AsyncStorage.getItem('location');
      if (locationData === null) {
        console.log('Location data null');

        location();
        getData();
      } else {
        getData();
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    setMode();
    firstStart();
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../../assets/image/Logo.png')}
      />
      <Text style={styles.text}>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
