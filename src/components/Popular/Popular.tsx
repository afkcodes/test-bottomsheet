import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import MbText from '~components/shared/MbText/MbText';
import MbView from '~components/shared/MbView/MbView';
import { globalStyles } from '~styles/global';
import { styles } from './popular.styles';

const Popular = () => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => {
      // console.log('opac');
    }}
  >
    <View style={styles.mainContainer}>
      <MbView style={styles.posterContainer}>
        <FastImage
          style={styles.imageStyles}
          source={{
            uri: 'https://mytuner.global.ssl.fastly.net/media/tvos_radios/34ukvzpesvlu.png',
            priority: FastImage.priority.normal
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </MbView>
      <MbText numberOfLines={1} style={[globalStyles.textStyle, styles.titleStyle]}>
        Kadak Radio India
      </MbText>
    </View>
  </TouchableOpacity>
);

export default Popular;
