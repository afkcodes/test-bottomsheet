import { StyleSheet } from 'react-native';
import { FONTS } from '~config/config';

export const styles = StyleSheet.create({
  errorContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0
  },
  posterContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    overflow: 'hidden',
    padding: 0,
    margin: 0
    // backgroundColor: 'green'
  },
  imageStyles: {
    height: 400,
    width: 350
  },
  errorTitleContainer: {
    width: '100%',
    marginLeft: 8,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: 'red'
  },
  errorTitleStyle: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    textAlign: 'center'
  },
  errorSubTitleStyle: {
    fontFamily: FONTS.medium,
    textAlign: 'center',
    marginVertical: 20
  }
});
