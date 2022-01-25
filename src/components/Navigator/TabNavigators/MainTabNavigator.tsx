import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react';
import { COLORS } from '~config/config';
import Home from '~screens/Home/Home';
import News from '~screens/News/News';
import Search from '~screens/Search/Search';
import Settings from '~screens/Settings/Settings';
import useStore from '~states/useStore';
import { globalStyles } from '~styles/global';

import { tabBarIconSelector } from '~utils/utils';
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  const theme = useStore((state) => state.theme);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          tabBarIconSelector(route, {
            focused,
            color,
            size
          }),
        tabBarActiveTintColor: COLORS.primary[900],
        tabBarInactiveTintColor: theme === 'dark' ? 'rgb(177,179,180)' : COLORS.dark[600],
        tabBarStyle: {
          borderTopColor: 'transparent'
        },
        tabBarLabelStyle: globalStyles.tabBarLabelStyles,
        headerShown: false,
        tabBarHideOnKeyboard: true
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
