import { StyleSheet } from 'react-native';
import { FONTS } from '~config/config';

export const styles = StyleSheet.create({
  inputContainerStyle: {
    display: 'flex',
    width: '100%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  inputStyles: {
    width: '85%',
    fontFamily: FONTS.medium,
    fontSize: FONTS.sizeR
  }
});
