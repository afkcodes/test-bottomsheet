import React, { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  layoutStyles: {
    padding: 4,
    display: 'flex',
    alignItems: 'center',
    flex: 1
  }
});
const Main = ({ children }: { children: ReactElement | ReactElement[] }) => (
  <>
    <View style={styles.layoutStyles}>{children}</View>
  </>
);

export default Main;
