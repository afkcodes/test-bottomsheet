import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { globalStyles } from '~styles/global';
import { styles } from './recently.styles';

const Recently = () => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => {
      console.log('opac');
    }}
  >
    <View style={styles.mainContainer}>
      <View style={styles.posterContainer}>
        <FastImage
          style={styles.imageStyles}
          source={{
            uri: 'https://i.scdn.co/image/ab6761610000e5ebc9ac92d87de28795c1c49730',
            priority: FastImage.priority.normal
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={styles.recentlyTitleContainer}>
        <Text numberOfLines={1} style={globalStyles.textStyle}>
          Kadak Radio India
        </Text>
        <Text numberOfLines={1} style={[globalStyles.textStyle, globalStyles.subTitleStyle]}>
          Retro, Bollywood
        </Text>
        <Text numberOfLines={1} style={[globalStyles.textStyle, globalStyles.subTitleStyle]}>
          India
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default Recently;
