import {StyleSheet} from 'react-native';
import {
  borderRadius,
  center,
  margin,
  mediumText,
  padding,
  row,
  spaceEvenly,
} from '../../utils/styles/globalStyle';
import {wp} from '../../utils/styles/responsive';
import {COLORS, FONTS} from '../../utils/styles/theme';
export const styles = StyleSheet.create({
  locationContainer: {
    ...row,
    ...center,
    marginBottom: margin.generic,
  },
  locationInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.C2,
    borderRadius: borderRadius.generic,
    paddingVertical: padding.small,
    marginRight: margin.normal,
    paddingHorizontal: padding.generic,
    ...mediumText,
    color: COLORS.C2,
  },
  locationIcon: {
    marginRight: wp(4),
  },
  placeholder: {
    ...mediumText,
    color: COLORS.C2,
  },
  dropdown: {
    borderColor: COLORS.C2,
    marginBottom: margin.generic,
  },
  textStyle: {
    color: COLORS.C2,
  },
  selectedText: {
    flex: 1,
    ...mediumText,
    paddingVertical: padding.normal,
  },
  containerStyle: {
    borderColor: COLORS.C2,
  },
  headingText: {
    ...mediumText,
    marginBottom: margin.generic,
  },
  picView: {
    ...center,
    borderRadius: borderRadius.generic,
    backgroundColor: COLORS.F8,
    padding: padding.generic,
    marginVertical: margin.small,
  },
  uploadPicTextContainer: {
    ...spaceEvenly,
    marginLeft: margin.extraLarge,
  },
  uploadPicText: {
    ...mediumText,
    color: COLORS.C2,
  },
  uploadLimitText: {
    color: COLORS.C2,
    fontFamily: FONTS.ROBOTO_ITALIC,
  },
});
