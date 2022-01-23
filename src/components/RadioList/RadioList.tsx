import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import MbText from '~components/shared/MbText/MbText';
import MbView from '~components/shared/MbView/MbView';
import { globalStyles } from '~styles/global';
import { styles } from './radiolist.styles';
const RadioList = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.mainContainer}
      onPress={() => {
        // console.log('opac');
      }}
    >
      <View style={styles.mainContainer}>
        <MbView style={[styles.holderContainer]}>
          <MbView style={styles.listTitleContainer}>
            <MbText numberOfLines={1} style={globalStyles.textStyle}>
              Kadak Radio India
            </MbText>
            <MbText numberOfLines={1} style={globalStyles.subTitleStyle}>
              Retro, Bollywood
            </MbText>
            <MbText numberOfLines={1} style={globalStyles.subTitleStyle}>
              India
            </MbText>
          </MbView>
        </MbView>
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
};

export default RadioList;
