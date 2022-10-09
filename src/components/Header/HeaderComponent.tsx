import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {FC, useState} from 'react';
import styles from './HeaderComponent.styles';
import DashboardIcon from '../../../assets/svg/Dashboard';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IHeaderComponent {}

const HeaderComponent: FC<IHeaderComponent> = ({}) => {
  const [name, setName] = useState('');
  const [weatherData, setWeatherData] = React.useState<any>(null);
  const data = JSON.parse(weatherData);

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

  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('name');
      if (value !== null) {
        setName(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  useState(() => {
    getUser();
    getData();
  });

  return (
    <>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Image source={require('../../../assets/image/User.png')} />
          <View>
            <Text style={styles.nameText}>{name}</Text>

            <Text style={styles.nameText}>
              {data?.location.region} - {data?.location.country}
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <DashboardIcon width={38} height={'100%'} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HeaderComponent;
