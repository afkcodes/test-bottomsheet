import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '~config/config';

export const globalStyles = StyleSheet.create({
  textStyle: {
    fontSize: FONTS.sizeR,
    fontFamily: FONTS.medium,
    color: COLORS.dark[800],
    fontWeight: '500'
  },
  subTitleStyle: {
    fontSize: FONTS.sizeS,
    fontFamily: FONTS.medium,
    color: COLORS.dark[800],
    fontWeight: '500'
  },
  tabBarLabelStyles: {
    fontFamily: FONTS.medium,
    fontSize: FONTS.sizeS,
    paddingBottom: 2
  }
});
