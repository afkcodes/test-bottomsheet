import { StyleSheet } from 'react-native';
import { COLORS } from '~config/config';

export const styles = StyleSheet.create({
  touchableStyles: {
    width: '100%'
  },
  mainContainer: {
    height: 90,
    width: '100%',
    // overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  holderContainer: {
    display: 'flex',
    height: 90,
    width: '90%',
    backgroundColor: '#EEEEEE',
    alignSelf: 'flex-end',
    borderRadius: 8,
    justifyContent: 'center'
  },
  posterContainer: {
    position: 'absolute',
    left: 0,
    width: 80,
    height: 80,
    overflow: 'hidden',
    backgroundColor: 'black',
    borderRadius: 8
  },
  imageStyles: {
    width: 80,
    height: 80
  },

  recentlyTitleContainer: {
    height: 60,
    width: 120,
    marginLeft: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
});
