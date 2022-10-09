import {StyleSheet} from 'react-native';
import Fonts from '../../styles/Font';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 37,
  },
  mainText: {
    fontSize: 24,
    color: '#09151E',
    fontFamily: Fonts.defaultMediumFontFamily,
    marginRight: 20,
  },
  headerIconContainer: {
    bottom: -30,
  },
  mainContainer: {
    width: 340,
    height: 340,
    borderRadius: 340 / 2,
    backgroundColor: '#0C1823',
    marginLeft: 37,
    marginTop: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainContainerText: {
    left: 4,
    fontSize: 14,
    color: '#fff',
    fontFamily: Fonts.defaultRegularFontFamily,
  },
  mainContainerDegree: {
    fontSize: 43,
    color: '#fff',
    fontFamily: Fonts.defaultRegularFontFamily,
    left: 25,
  },
  iconContainer: {
    position: 'absolute',
    right: 70,
    top: 190,
  },
  bodyContainer: {
    marginRight: 60,
    marginBottom: 30,
  },
});
