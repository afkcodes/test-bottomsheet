import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { globalStyles } from '~styles/global';
import { styles } from './radiolist.styles';

const RadioList = () => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={styles.mainContainer}
    onPress={() => {
      console.log('opac');
    }}
  >
    <View style={styles.mainContainer}>
      <View style={styles.holderContainer}>
        <View style={styles.recentlyTitleContainer}>
          <Text numberOfLines={1} style={globalStyles.textStyle}>
            Kadak Radio India
          </Text>
          <Text numberOfLines={1} style={[globalStyles.textStyle, globalStyles.subTitleStyle]}>
            Retro, Bollywood
          </Text>
          <Text numberOfLines={1} style={[globalStyles.subTitleStyle]}>
            India
          </Text>
        </View>
      </View>
      <View style={styles.posterContainer}>
        <FastImage
          style={styles.imageStyles}
          source={{
            uri: 'https://mytuner.global.ssl.fastly.net/media/tvos_radios/34ukvzpesvlu.png',
            priority: FastImage.priority.normal
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
    </View>
  </TouchableOpacity>
);

export default RadioList;
