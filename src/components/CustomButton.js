import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  borderRadius,
  center,
  mediumText,
  padding,
  row,
  sizes,
} from '../utils/styles/globalStyle';
import {COLORS} from '../utils/styles/theme';

const CustomButton = ({onPress, style, textStyle, text, disabled, Icon}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={
        disabled ? [style, {backgroundColor: COLORS.PRIMARY_LIGHT}] : style
      }>
      {Icon && <Icon />}
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

CustomButton.defaultProps = {
  style: {
    ...center,
    ...row,
    borderRadius: borderRadius.big,
    backgroundColor: COLORS.PRIMARY,
    paddingVertical: sizes.h9,
    paddingHorizontal: padding.normal,
  },
  textStyle: {
    ...mediumText,
    color: COLORS.WHITE,
  },
  Icon: null,
};

export default CustomButton;
