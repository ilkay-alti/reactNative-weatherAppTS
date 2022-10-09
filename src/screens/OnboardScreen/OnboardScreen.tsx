import React, {FC} from 'react';
import {Text, TouchableNativeFeedback, View} from 'react-native';
import styles from './OnboardScreen.style';

import AsyncStorage from '@react-native-async-storage/async-storage';
interface IOnboardPage {
  navigation: any;
}
const OnboardScreen: FC<IOnboardPage> = ({navigation}) => {
  const locations = async () => {
    const location = await AsyncStorage.getItem('location');
    location === null
      ? navigation.navigate('SplashScreen')
      : navigation.navigate('Homes');
  };

  React.useEffect(() => {
    locations();
  });

  const handleOnPress = () => {
    navigation.navigate('SplashScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Let's See {'\n'}The ⭐{'\n'}Weather {'\n'}Around you
      </Text>
      <TouchableNativeFeedback onPress={handleOnPress}>
        <View style={styles.button}>
          <Text style={styles.subTitle}>Let's Check</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
export default OnboardScreen;
