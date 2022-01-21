import React, { ReactChild } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  layoutStyles: {
    padding: 4,
    display: 'flex',
    alignItems: 'center',
    flex: 1
  }
});
const Main = ({ children }: { children: ReactChild }) => (
  <>
    <StatusBar barStyle="dark-content" />
    <View style={styles.layoutStyles}>{children}</View>
  </>
);

export default Main;
