import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './RenderItemComponent.sytle';

interface IRenderItemComponent {
  item: {text: string; id: number; emoji: string};
  onPress: () => void;
  backgroundColor: {backgroundColor: string};
  textColor: {color: string};
}

const RenderItemComponent: FC<IRenderItemComponent> = ({
  item,
  onPress,
  backgroundColor,
  textColor,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: backgroundColor.backgroundColor,
          width: 150,
          height: 150,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          margin: 10,
        }}>
        <View style={styles.moodBox}>
          <Text style={{color: textColor.color}}>
            {item.text}
            {'  '}
            {item.emoji}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RenderItemComponent;
