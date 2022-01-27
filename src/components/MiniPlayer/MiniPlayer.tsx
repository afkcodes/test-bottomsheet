import React from 'react';
import { View } from 'react-native';
import MbText from '~components/shared/MbText/MbText';
import useStore from '~states/useStore';
import { globalStyles } from '~styles/global';
import { styles } from './miniplayer.styles';

const MiniPlayer = () => {
  const currentTheme = useStore((state) => state.theme);
  const miniPlayerStyle = currentTheme === 'dark' ? styles.miniPlayerDark : styles.miniPlayerLight;

  return (
    <View style={[styles.miniPlayerContainer, miniPlayerStyle]}>
      <MbText style={[globalStyles.textStyle]}>this is a miniplayer</MbText>
    </View>
  );
};

export default MiniPlayer;
