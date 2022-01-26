import React from 'react';
import { Text, TextProps } from 'react-native';
import { DarkOrLight, ThemeSliceType } from '~states/themeSlice/types';
import useStore from '~states/useStore';

const MbText = ({ children, style, ...rest }: { children: string; style: any } & TextProps) => {
  const theme = useStore((state) => state.theme) as keyof ThemeSliceType;
  const currentThemeStyles = useStore((state) => state[theme]) as DarkOrLight;
  return (
    <Text {...rest} style={[currentThemeStyles.color, style]}>
      {children}
    </Text>
  );
};

export default MbText;
