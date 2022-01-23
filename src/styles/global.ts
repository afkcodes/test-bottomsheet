import { StyleSheet } from 'react-native';
import { FONTS } from '~config/config';

export const globalStyles = StyleSheet.create({
  textStyle: {
    fontSize: FONTS.sizeR,
    fontFamily: FONTS.medium,
    fontWeight: '500'
  },
  subTitleStyle: {
    fontSize: FONTS.sizeS,
    fontFamily: FONTS.medium,
    fontWeight: '500'
  },
  tabBarLabelStyles: {
    fontFamily: FONTS.medium,
    fontSize: FONTS.sizeS,
    paddingBottom: 2
  }
});
