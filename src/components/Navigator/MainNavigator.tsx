import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { COLORS } from '~config/config';
import News from '~screens/News/News';
import Search from '~screens/Search/Search';
import Settings from '~screens/Settings/Settings';
import useStore from '~states/useStore';
import { globalStyles } from '~styles/global';
import { MbDark, MbLight, tabBarIconSelector } from '~utils/utils';
import HomeStackNavigator from './StackNavigators/HomeStackNavigator';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const theme = useStore((state) => state.theme);
  StatusBar.setBackgroundColor(theme === 'dark' ? COLORS.dark[900] : COLORS.dark[50]);
  StatusBar.setBarStyle(theme === 'dark' ? 'light-content' : 'dark-content');

  return (
    <NavigationContainer theme={theme === 'dark' ? MbDark : MbLight}>
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
          tabBarLabelStyle: globalStyles.tabBarLabelStyles
        })}
      >
        <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeStackNavigator} />
        <Tab.Screen options={{ headerShown: false }} name="Search" component={Search} />
        <Tab.Screen options={{ headerShown: false }} name="News" component={News} />
        <Tab.Screen options={{ headerShown: false }} name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
