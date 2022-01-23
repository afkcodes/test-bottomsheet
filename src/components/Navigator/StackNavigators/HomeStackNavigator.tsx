import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Favorites from '~screens/Favorites/Favorites';
import Home from '~screens/Home/Home';
import { RootStackParamList } from './types';

const HomeStack = createNativeStackNavigator<RootStackParamList>();
const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen options={{ headerShown: false }} name="HomeScreen" component={Home} />
    <HomeStack.Screen options={{ headerShown: false }} name="Favorites" component={Favorites} />
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
