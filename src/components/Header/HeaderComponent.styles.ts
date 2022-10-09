import {StyleSheet} from 'react-native';
import Fonts from '../../styles/Font';

export default StyleSheet.create({
  container: {
    height: 43,
    marginHorizontal: 28,
    marginTop: 42,
    marginBottom: 47,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 12,
    color: '#36424D',
    left: 21,
    fontFamily: Fonts.defaultRegularFontFamily,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
