import {StyleSheet} from 'react-native';
import Colors from '../../styles/Color';
import Fonts from '../../styles/Font';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: Colors.defaultWhiteColor,
    paddingHorizontal: 42,
    paddingVertical: 77,
  },

  title: {
    width: 254,
    fontSize: 42,
    fontWeight: 'bold',
    fontFamily: Fonts.defaultBoldFontFamily,
    color: Colors.defaultBlueColor,
    lineHeight: 60,
    textAlign: 'left',
    marginVertical: 210,
  },
  subTitle: {
    color: Colors.defaultBackgroundColor,
    fontFamily: Fonts.defaultRegularFontFamily,
    fontSize: 20,
  },
  button: {
    height: 62,
    width: '100%',
    backgroundColor: Colors.defaultBlueColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
});
