import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import MoodScreen from './src/screens/MoodScreen';
import MapScreen from './src/screens/MapScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SplashScreen from './src/screens/SplashScreen';
import OnboardScreen from './src/screens/OnboardScreen';
import {Provider} from 'react-redux';
import {store} from './src/redux';
import CloudIcon from './assets/svg/Cloud';
import SunIcon from './assets/svg/Sun';
import MapIcon from './assets/svg/Map';
import ThunderIcon from './assets/svg/Thunder';
import styles from './App.styles';
import {View} from 'react-native';

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="MapScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: 'absolute',
          bottom: 36,
          left: 40,
          right: 40,
          elevation: 0,
          backgroundColor: '##fcfcfc',
          borderRadius: 15,
          height: 48,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={
                  focused
                    ? styles.tabIconContainerFocused
                    : styles.tabIconContainer
                }>
                <SunIcon
                  width={32}
                  height={32}
                  color={focused ? '#fcfcfc' : '#0C1823'}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="MoodScreen"
        component={MoodScreen}
        options={{
          title: 'Mood',
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={
                  focused
                    ? styles.tabIconContainerFocused
                    : styles.tabIconContainer
                }>
                <CloudIcon
                  width={32}
                  height={32}
                  color={focused ? '#fcfcfc' : '#0C1823'}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: 'Map',
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={
                  focused
                    ? styles.tabIconContainerFocused
                    : styles.tabIconContainer
                }>
                <MapIcon
                  width={32}
                  height={32}
                  color={focused ? '#fcfcfc' : '#0C1823'}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={
                  focused
                    ? styles.tabIconContainerFocused
                    : styles.tabIconContainer
                }>
                <ThunderIcon
                  width={32}
                  height={32}
                  color={focused ? '#fcfcfc' : '#0C1823'}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
          <Stack.Screen name="Homes" component={BottomNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
