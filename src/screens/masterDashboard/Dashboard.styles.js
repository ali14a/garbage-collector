import {StyleSheet} from 'react-native';
import {
  borderRadius,
  elevation,
  margin,
  mediumText,
  padding,
  row,
  sizes,
} from '../../utils/styles/globalStyle';
import {hp} from '../../utils/styles/responsive';
import {COLORS, FONTS} from '../../utils/styles/theme';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: padding.generic,
    marginTop: hp(52),
    paddingBottom: padding.generic,
  },
  subHeadingText: {
    color: COLORS.C5,
    fontSize: sizes.h7,
    marginVertical: margin.large,
    fontFamily: FONTS.ROBOTO_MEDIUM,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  monthContainer: {
    ...row,
    ...elevation,
    backgroundColor: COLORS.WHITE,
    borderRadius: borderRadius.generic,
    paddingVertical: padding.generic,
    marginBottom: margin.generic,
    paddingHorizontal: padding.large,
    alignItems: 'center',
  },
  calendarCheckIcon: {
    fontSize: sizes.h2,
  },
  monthTextContainer: {
    marginLeft: margin.extraLarge,
  },
  monthText: {
    ...mediumText,
  },
  subText: {
    color: COLORS.E0,
    fontSize: sizes.h7,
  },
  monthLogContainer: {
    paddingHorizontal: padding.generic,
    paddingTop: padding.normal,
    paddingBottom: 40,
  },
  fieldContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: borderRadius.big,
    justifyContent: 'space-evenly',
    paddingBottom: padding.generic,
    paddingHorizontal: padding.generic,
    marginRight: margin.normal,
  },
  valueText: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.ROBOTO_MEDIUM,
    fontWeight: '700',
    fontSize: sizes.h2,
  },
  wet: {
    color: COLORS.WET,
  },
  dry: {
    color: COLORS.DRY,
  },
  hazard: {
    color: COLORS.HAZARD,
  },
  graphContainer:{
    marginTop:margin.extrabig,
  }
});
