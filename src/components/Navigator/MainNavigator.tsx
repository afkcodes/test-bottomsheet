import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { StatusBar } from 'react-native';
import MiniPlayer from '~components/MiniPlayer/MiniPlayer';
import { COLORS } from '~config/config';
import News from '~screens/News/News';
import Search from '~screens/Search/Search';
import Settings from '~screens/Settings/Settings';
import useStore from '~states/useStore';
import { globalStyles } from '~styles/global';
import { MbDark, MbLight, tabBarIconSelector } from '~utils/themeUtils';
import HomeStackNavigator from './StackNavigators/HomeStackNavigator';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const theme = useStore((state) => state.theme);
  const isDarkTheme = theme === 'dark';

  StatusBar.setBackgroundColor(isDarkTheme ? 'rgb(0, 0, 0)' : COLORS.dark[50]);
  StatusBar.setBarStyle(isDarkTheme ? 'light-content' : 'dark-content');
  // StatusBar.setTranslucent(true);

  return (
    <NavigationContainer theme={isDarkTheme ? MbDark : MbLight}>
      <Tab.Navigator
        tabBar={(tabsProps) => (
          <>
            <MiniPlayer />
            <BottomTabBar {...tabsProps} />
          </>
        )}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) =>
            tabBarIconSelector(route, {
              focused,
              color,
              size
            }),
          tabBarActiveTintColor: COLORS.primary[900],
          tabBarInactiveTintColor: isDarkTheme ? 'rgb(159,159,150)' : COLORS.dark[600],
          tabBarStyle: {
            borderTopColor: 'transparent',
            backgroundColor: isDarkTheme ? '#000' : '#fff',
            elevation: 3
          },
          tabBarLabelStyle: globalStyles.tabBarLabelStyles,
          headerShown: false
        })}
      >
        <Tab.Screen name="Home" component={HomeStackNavigator} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="News" component={News} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
