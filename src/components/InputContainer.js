import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {borderRadius, margin, padding, row} from '../utils/styles/globalStyle';
import {wp} from '../utils/styles/responsive';
import {COLORS} from '../utils/styles/theme';

const InputContainer = ({children}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default InputContainer;

const styles = StyleSheet.create({
  container: {
    ...row,
    marginBottom: margin.generic,
    paddingHorizontal: padding.normal,
    borderColor: COLORS.C2,
    borderWidth: wp(1),
    borderRadius: borderRadius.generic,
  },
});
