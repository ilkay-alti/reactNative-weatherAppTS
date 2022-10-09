import {View, Text} from 'react-native';
import React from 'react';
import styles from './FooterComponent.style';
const FooterComponent = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerContainerItem}>
        <Text style={styles.footerContainerItemText}>Today's Mood</Text>
        <Text style={styles.footerContainerItemSubText}>Good</Text>
      </View>
      <View style={styles.footerContainerItem}>
        <Text style={styles.footerContainerItemText}>Tomorrow's Mood</Text>
        <Text style={styles.footerContainerItemSubText}>Good</Text>
      </View>
    </View>
  );
};

export default FooterComponent;
