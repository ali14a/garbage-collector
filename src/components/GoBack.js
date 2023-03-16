import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../utils/styles/theme';
import {hp, wp} from '../utils/styles/responsive';
import {margin, padding} from '../utils/styles/globalStyle';

const GoBack = ({color}) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <Pressable onPress={goBack} style={styles.container}>
      <FontAwesome name="angle-left" size={hp(36)} color={color} />
    </Pressable>
  );
};

export default GoBack;

GoBack.defaultProps = {
  color: COLORS.PRIMARY,
};

export const styles = StyleSheet.create({
  container: {
    width: wp(60),
    paddingVertical: padding.generic,
  },
});
