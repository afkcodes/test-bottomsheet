import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { COLORS } from '~config/config';
import Favorites from '~screens/Favorites/Favorites';
import useStore from '~states/useStore';
import { MbDark, MbLight } from '~utils/utils';
import MainTabNavigator from './TabNavigators/MainTabNavigator';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const theme = useStore((state) => state.theme);
  StatusBar.setBackgroundColor(theme === 'dark' ? COLORS.dark[900] : COLORS.dark[50]);
  StatusBar.setBarStyle(theme === 'dark' ? 'light-content' : 'dark-content');

  return (
    <NavigationContainer theme={theme === 'dark' ? MbDark : MbLight}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right'
        }}
      >
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen name="Favorites" component={Favorites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
