import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

const Favorites = () => {
  const { colors } = useTheme();
  return (
    <View>
      <Text style={{ color: colors.text }}>Favorite Screen</Text>
    </View>
  );
};

export default Favorites;
