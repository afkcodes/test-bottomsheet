import { StyleSheet } from 'react-native';
import { COLORS } from '~config/config';

export const styles = StyleSheet.create({
  miniPlayerContainer: {
    height: 55,
    width: '100%',
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2
  },
  miniPlayerDark: {
    backgroundColor: '#000000',
    borderTopColor: COLORS.dark[700],
    borderBottomColor: COLORS.dark[700]
  },
  miniPlayerLight: {
    backgroundColor: '#ffffff',
    borderTopColor: COLORS.dark[50],
    borderBottomColor: COLORS.dark[50]
  },
  miniPlayerHideStyles: {
    height: 0
  }
});
