import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {STRING} from '../utils/constant/strings';
import {hp} from '../utils/styles/responsive';
import {COLORS} from '../utils/styles/theme';
import InputContainer from './InputContainer';

const AdditionalInfoInput = () => {
  return (
    <InputContainer>
      <TextInput
        placeholder={`${STRING.ADDITIONAL_INFO} ${STRING.OPTIONAL}`}
        placeholderTextColor={COLORS.C2}
        style={styles.additionalInfoText}
      />
    </InputContainer>
  );
};

export default AdditionalInfoInput;

const styles = StyleSheet.create({
  additionalInfoText: {
    color: COLORS.C2,
    paddingBottom: hp(44),
    flex: 1,
  },
});
