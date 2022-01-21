import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    height: 60,
    width: 180,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  posterContainer: {
    width: 50,
    height: 50,
    overflow: 'hidden',
    backgroundColor: 'black',
    borderRadius: 8,
    marginLeft: 8
  },
  imageStyles: {
    width: 50,
    height: 50
  },

  recentlyTitleContainer: {
    height: 60,
    width: 120,
    marginLeft: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
});
