import {
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './MoodScreen.style';
import HeaderComponent from '../../components/Header/HeaderComponent';

import RenderItemComponent from '../../components/RenderItem/RenderItemComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MoodScreen = () => {
  const data = [
    {text: 'very good', emoji: '😊', id: 1},
    {text: 'good', emoji: '😊', id: 2},
    {text: 'neutral ', emoji: '😐', id: 3},
    {text: 'bad', emoji: '😞', id: 4},
    {text: 'very bad', emoji: '😞', id: 5},
  ];
  const [selectedId, setSelectedId] = useState(1);
  const handleOnPress = async () => {
    console.log(data[selectedId - 1].text);
  };
  const mergeMode = async () => {
    try {
      await AsyncStorage.mergeItem(
        'mode',
        `${new Date().toLocaleDateString()}/${data[selectedId - 1].text}`,
      );
    } catch (e) {
      console.log("can't fetch weather data");
    }
  };
  useEffect(() => {
    mergeMode();
  }, [selectedId]);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent />
      <Text style={styles.mainText}>How You feel Today ?</Text>

      <FlatList
        style={styles.flatList}
        numColumns={2}
        data={data}
        renderItem={({item}) => {
          const backgroundColor =
            item.id === selectedId ? '#36424D' : '#fcfcfc';
          const color = item.id === selectedId ? 'white' : '#36424D';
          return (
            <RenderItemComponent
              item={item}
              onPress={() => setSelectedId(item.id)}
              backgroundColor={{backgroundColor}}
              textColor={{color}}
            />
          );
        }}
      />
      <TouchableOpacity onPress={handleOnPress}>
        <View style={styles.button}>
          <Text style={styles.subTitle}>Save</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MoodScreen;
