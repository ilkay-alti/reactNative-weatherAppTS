import {StyleSheet} from 'react-native';
import Colors from '../../styles/Color';
import Fonts from '../../styles/Font';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.defaultBlueColor,
  },
  img: {
    width: 104,
    height: 72,
  },
  text: {
    color: Colors.defaultWhiteColor,
    fontSize: 27,
    fontWeight: 'bold',
    fontFamily: Fonts.syncopateBoldFontFamily,
    marginTop: 34,
  },
});
