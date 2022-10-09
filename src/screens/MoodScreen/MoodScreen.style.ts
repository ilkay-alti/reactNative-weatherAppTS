import {StyleSheet} from 'react-native';
import Colors from '../../styles/Color';
import Fonts from '../../styles/Font';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    maxHeight: 420,
    marginLeft: 34,
  },
  mainText: {
    fontSize: 24,
    fontFamily: Fonts.defaultMediumFontFamily,
    color: '#09151E',
    marginLeft: 26,
    marginBottom: 22,
  },
  subTitle: {
    color: Colors.defaultBackgroundColor,
    fontFamily: Fonts.defaultRegularFontFamily,
    fontSize: 20,
  },
  button: {
    height: 62,
    width: '80%',
    marginHorizontal: '10%',
    backgroundColor: Colors.defaultBlueColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginTop: 50,
  },
});
