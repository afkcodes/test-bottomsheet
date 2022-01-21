import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { globalStyles } from '~styles/global';
import { styles } from './popular.styles';

const Popular = () => (
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
            uri: 'https://mytuner.global.ssl.fastly.net/media/tvos_radios/34ukvzpesvlu.png',
            priority: FastImage.priority.normal
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <Text numberOfLines={1} style={[globalStyles.textStyle, styles.titleStyle]}>
        Kadak Radio India
      </Text>
    </View>
  </TouchableOpacity>
);

export default Popular;
