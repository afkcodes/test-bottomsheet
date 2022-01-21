import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    width: 260,
    borderRadius: 8,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  },
  posterContainer: {
    width: 240,
    height: 120,
    overflow: 'hidden',
    borderRadius: 8
  },
  imageStyles: {
    width: 240,
    height: 120
  },
  titleStyle: {
    display: 'flex',
    alignSelf: 'center',
    paddingVertical: 4
  }
});
