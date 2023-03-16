import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {STRING} from '../utils/constant/strings';
import {center, sizes} from '../utils/styles/globalStyle';
import {COLORS, FONTS} from '../utils/styles/theme';

const ComingSoon = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{STRING.FEATURE_COMING_SOON}</Text>
    </View>
  );
};

export default ComingSoon;

const styles = StyleSheet.create({
  container: {
    ...center,
    flex: 1,
  },
  text: {
    color: COLORS.C5,
    fontFamily: FONTS.ROBOTO_MEDIUM,
    fontSize: sizes.h7,
  },
});
