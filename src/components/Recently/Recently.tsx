import React from 'react';
import { TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import MbText from '~components/shared/MbText/MbText';
import MbView from '~components/shared/MbView/MbView';
import { globalStyles } from '~styles/global';
import { styles } from './recently.styles';

const Recently = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        // console.log('opac');
      }}
    >
      <MbView style={styles.mainContainer}>
        <MbView style={styles.posterContainer}>
          <FastImage
            style={styles.imageStyles}
            source={{
              uri: 'https://i.scdn.co/image/ab6761610000e5ebc9ac92d87de28795c1c49730',
              priority: FastImage.priority.normal
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </MbView>
        <MbView style={styles.recentlyTitleContainer}>
          <MbText numberOfLines={1} style={[globalStyles.textStyle]}>
            Kadak Radio India
          </MbText>
          <MbText numberOfLines={1} style={[globalStyles.subTitleStyle]}>
            Retro, Bollywood
          </MbText>
          <MbText numberOfLines={1} style={[globalStyles.subTitleStyle]}>
            India
          </MbText>
        </MbView>
      </MbView>
    </TouchableOpacity>
  );
};

export default Recently;
