import { Home3, SearchNormal1, Setting, TrendUp } from 'iconsax-react-native';
import React from 'react';

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
