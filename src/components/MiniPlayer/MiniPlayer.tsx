import React from 'react';
import { Text, View } from 'react-native';
import useStore from '~states/useStore';
import { styles } from './miniplayer.styles';

const MiniPlayer = () => {
  const keyboardState = useStore((state) => state.keyboardState);
  // console.log(keyboardState);

  const miniPlayerHideStyles = keyboardState
    ? styles.miniPlayerHideStyles
    : styles.miniPlayerContainer;

  return (
    <View style={[miniPlayerHideStyles]}>
      <Text>this is a miniplayer</Text>
    </View>
  );
};

export default MiniPlayer;
