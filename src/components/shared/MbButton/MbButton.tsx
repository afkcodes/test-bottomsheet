import React from 'react';
import { TouchableOpacity } from 'react-native';
import useStore from '~states/useStore';
import { globalStyles } from '~styles/global';
import MbText from '../MbText/MbText';
import { styles } from './mbbutton.styles';

const MbButton = () => {
  const theme = useStore((state) => state.theme);
  const buttonTheme = theme === 'dark' ? styles.buttonDarkStyles : styles.buttonLightStyles;
  const buttonTextTheme =
    theme === 'dark' ? styles.buttonTextDarkStyles : styles.buttonTextLightStyles;

  return (
    <TouchableOpacity
      onPress={() => {}}
      activeOpacity={0.8}
      style={[styles.buttonStyles, buttonTheme]}
    >
      <MbText style={[globalStyles.textStyle, styles.buttonTextStyles, buttonTextTheme]}>
        Try Again
      </MbText>
    </TouchableOpacity>
  );
};

export default MbButton;
