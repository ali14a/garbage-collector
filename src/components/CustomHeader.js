import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  center,
  margin,
  mediumText,
  padding,
  row,
  sizes,
  spaceBetween,
} from '../utils/styles/globalStyle';
import {hp, wp} from '../utils/styles/responsive';
import {COLORS} from '../utils/styles/theme';

const CustomHeader = ({title, showBackBtn, HeaderRight}) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <>
      {showBackBtn && (
        <Pressable onPress={goBack} style={styles.goBackContainer}>
          <FontAwesome name="angle-left" size={hp(36)} color={COLORS.PRIMARY} />
        </Pressable>
      )}
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        {HeaderRight && <HeaderRight />}
      </View>
    </>
  );
};
export default CustomHeader;
CustomHeader.defaultProps = {
  showBackBtn: true,
  HeaderRight: null,
};
export const styles = StyleSheet.create({
  goBackContainer: {
    width: wp(60),
    paddingTop: padding.extraLarge,
    paddingBottom: padding.generic,
  },
  header: {
    ...row,
    ...center,
    ...spaceBetween,
  },
  headerText: {
    ...mediumText,
    fontSize: sizes.h1,
    fontWeight: '700',
    marginBottom: margin.generic,
  },
});
