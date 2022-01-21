import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { useColorScheme } from 'react-native';
import { COLORS } from '~config/config';
import Home from '~screens/Home/Home';
import News from '~screens/News/News';
import Search from '~screens/Search/Search';
import Settings from '~screens/Settings/Settings';
import { globalStyles } from '~styles/global';
import { tabBarIconSelector } from '~utils/utils';

const Tab = createBottomTabNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary[900]
  }
};

export default function AppNavigator() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : MyTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) =>
            tabBarIconSelector(route, {
              focused,
              color,
              size
            }),
          tabBarActiveTintColor: COLORS.primary[900],
          tabBarInactiveTintColor: COLORS.dark[600],
          tabBarLabelStyle: globalStyles.tabBarLabelStyles
        })}
      >
        <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Tab.Screen options={{ headerShown: false }} name="Search" component={Search} />
        <Tab.Screen options={{ headerShown: false }} name="News" component={News} />
        <Tab.Screen options={{ headerShown: false }} name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
