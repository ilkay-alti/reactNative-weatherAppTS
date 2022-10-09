import {StyleSheet} from 'react-native';
import Fonts from '../../styles/Font';

export default StyleSheet.create({
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 70,
  },
  footerContainerItem: {
    display: 'flex',
    marginHorizontal: 33,
  },
  footerContainerItemText: {
    color: '#36424D',
    fontSize: 14,
    fontFamily: Fonts.defaultRegularFontFamily,
  },
  footerContainerItemSubText: {
    color: '#0C1823',
    fontSize: 12,
    fontFamily: Fonts.defaultMediumFontFamily,
  },
});
