import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    width: 130,
    borderRadius: 8,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  },
  posterContainer: {
    width: 130,
    height: 130,
    overflow: 'hidden',
    borderRadius: 8
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
