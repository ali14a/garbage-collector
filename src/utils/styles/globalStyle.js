import {wp} from './responsive';
import {COLORS, FONTS} from './theme';

export const sizes = {
  h1: wp(32),
  h2: wp(24),
  h3: wp(22),
  h4: wp(20),
  h5: wp(18),
  h6: wp(16),
  h7: wp(14),
  h8: wp(12),
  h9: wp(10),
};

export const borderRadius = {
  tiny: wp(2),
  small: wp(5),
  normal: wp(8),
  generic: wp(10),
  medium: wp(12),
  large: wp(16),
  big: wp(20),
  extraBig: wp(30),
};

export const padding = {
  tiny: wp(4),
  small: wp(8),
  normal: wp(12),
  generic: wp(16),
  large: wp(20),
  big: wp(24),
  extraLarge: wp(28),
};

export const margin = {
  tiny: wp(4),
  small: wp(8),
  normal: wp(12),
  generic: wp(16),
  large: wp(20),
  big: wp(22),
  extrabig: wp(24),
  extraLarge: wp(28),
  maximum:wp(34)
};

export const mediumText = {
  fontSize: sizes.h6,
  fontWeight: '400',
  fontFamily: FONTS.ROBOTO_MEDIUM,
  color: COLORS.PRIMARY,
};

export const row = {
  flexDirection: 'row',
};
export const spaceBetween = {
  justifyContent: 'space-between',
};
export const spaceEvenly = {
  justifyContent: 'space-evenly',
};
export const spaceAround = {
  justifyContent: 'space-around',
};

export const center = {
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
};

export const elevation = {
  elevation: 5,
  shadowColor: COLORS.PRIMARY,
  shadowOffset: {
    width: 0,
  },
  shadowOpacity: 0.9,
  shadowRadius: wp(5),
};

export const paddingBottom = {
  paddingBottom: padding.generic,
};
