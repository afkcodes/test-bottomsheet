import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    width: 130,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  },
  posterContainer: {
    width: 130,
    height: 130,
    overflow: 'hidden',

    borderRadius: 100
  },
  imageStyles: {
    width: 130,
    height: 130
  },
  titleStyle: {
    display: 'flex',
    paddingVertical: 4
  }
});
