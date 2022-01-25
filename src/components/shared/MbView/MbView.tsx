import React, { ReactElement } from 'react';
import { TextProps, View } from 'react-native';
import { DarkOrLight, ThemeSliceType } from '~states/types';
import useStore from '~states/useStore';

const MbView = ({
  children,
  style,
  ...rest
}: { children: ReactElement | ReactElement[]; style?: any } & TextProps) => {
  const theme = useStore((state) => state.theme) as keyof ThemeSliceType;
  const currentThemeStyles = useStore((state) => state[theme]) as DarkOrLight;

  return (
    <View {...rest} style={[style, currentThemeStyles.backgroundColor]}>
      {children}
    </View>
  );
};

export default MbView;
