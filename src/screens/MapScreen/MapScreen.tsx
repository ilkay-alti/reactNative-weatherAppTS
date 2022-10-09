import {View} from 'react-native';
import React from 'react';
import styles from './MapScreen.style';
import HeaderComponent from '../../components/Header/HeaderComponent';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
const MapScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <MapView
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
    </View>
  );
};

export default MapScreen;
