import React from 'react';
import {StyleSheet, View} from 'react-native';
import {borderRadius, margin, padding} from '../utils/styles/globalStyle';
import {COLORS} from '../utils/styles/theme';

const Card = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius.big,
    backgroundColor: COLORS.WHITE,
    paddingVertical: padding.small,
    marginTop: margin.generic,
    paddingHorizontal: padding.large,
  },
});
