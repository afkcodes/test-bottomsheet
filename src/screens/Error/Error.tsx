import React from 'react';
import { View } from 'react-native';
import MbButton from '~components/shared/MbButton/MbButton';
import MbText from '~components/shared/MbText/MbText';
import { globalStyles } from '~styles/global';
import ErrorSvg from '../../../assets/images/no-internet.svg';
import { styles } from './error.styles';

const Error = () => {
  return (
    <View style={styles.errorContainer}>
      <View style={styles.posterContainer}>
        <ErrorSvg height="80%" width={400} />
      </View>
      <View style={styles.errorTitleContainer}>
        <MbText style={[styles.errorTitleStyle]}>Oops, No internet connection</MbText>
        <MbText style={[globalStyles.textStyle, styles.errorSubTitleStyle]}>
          Please make sure wifi or cellular data is turned on and try again.
        </MbText>
        <MbButton />
      </View>
    </View>
  );
};

export default Error;
