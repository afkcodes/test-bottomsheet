import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '~config/config';

export const styles = StyleSheet.create({
  buttonStyles: {
    backgroundColor: COLORS.primary[900],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 180,
    borderRadius: 100,
    marginVertical: 20,
    elevation: 1
  },
  buttonDarkStyles: {
    backgroundColor: COLORS.dark[800]
  },
  buttonLightStyles: {
    backgroundColor: COLORS.primary[900]
  },
  buttonTextStyles: {
    fontFamily: FONTS.bold,
    fontSize: 20
  },
  buttonTextDarkStyles: {
    color: COLORS.dark[300]
  },
  buttonTextLightStyles: {
    color: 'white'
  }
});
