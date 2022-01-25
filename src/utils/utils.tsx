import { Home3, SearchNormal1, Setting, TrendUp } from 'iconsax-react-native';
import React from 'react';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { COLORS } from '~config/config';

export const tabBarIconSelector = (
  route: any,
  {
    focused,
    color,
    size
  }: {
    focused: boolean;
    color: string;
    size: number;
  }
) => {
  if (route.name === 'Home') {
    return focused ? (
      <Home3 color={color} variant="Bold" size={size} />
    ) : (
      <Home3 color={color} variant="Outline" size={size} />
    );
  } else if (route.name === 'Settings') {
    return focused ? (
      <Setting color={color} variant="Bold" size={size} />
    ) : (
      <Setting color={color} variant="Outline" size={size} />
    );
  } else if (route.name === 'Search') {
    return focused ? (
      <SearchNormal1 color={color} variant="Bold" size={size} />
    ) : (
      <SearchNormal1 color={color} variant="Outline" size={size} />
    );
  } else if (route.name === 'News') {
    return focused ? (
      <TrendUp color={color} variant="Bold" size={size} />
    ) : (
      <TrendUp color={color} variant="Outline" size={size} />
    );
  }
};
export const MbLight = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary[900],
    background: 'rgb(255, 255, 255)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)'
  }
};

export const MbDark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: COLORS.primary[900],
    text: 'rgb(159,159,159)',
    card: 'rgb(26, 26, 26)',
    border: 'rgb(51, 51, 51)',
    background: '#000'
  }
};
