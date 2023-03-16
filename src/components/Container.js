import React from 'react';
import {StyleSheet, View} from 'react-native';
import {padding} from '../utils/styles/globalStyle';

const Container = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Container;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: padding.generic,
  },
});
