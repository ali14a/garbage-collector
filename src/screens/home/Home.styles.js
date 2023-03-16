import {StyleSheet} from 'react-native';
import {
  borderRadius,
  margin,
  padding,
  row,
  sizes,
  spaceBetween,
} from '../../utils/styles/globalStyle';
import {hp, wp} from '../../utils/styles/responsive';
import {COLORS, FONTS} from '../../utils/styles/theme';

export const styles = StyleSheet.create({
  profileContainer: {
    paddingHorizontal: padding.generic,
    marginTop: hp(52),
    paddingBottom: padding.generic,
  },
  greetText: {
    fontSize: sizes.h1,
    fontWeight: '700',
  },
  addressContainer: {
    ...row,
    ...spaceBetween,
    marginTop: margin.generic,
  },
  reachingInContainer: {
    borderRadius: borderRadius.big,
    backgroundColor: COLORS.WHITE,
    paddingVertical: hp(24),
    marginTop: sizes.h1,
    marginBottom: sizes.h5,
    paddingHorizontal: padding.large,
    marginHorizontal: margin.generic,
  },
  reachingInText: {
    textTransform: 'uppercase',
    fontWeight: '400',
    color: COLORS.PRIMARY_LIGHT,
  },
  etaText: {
    fontSize: sizes.h2,
    fontWeight: '700',
    marginVertical: margin.normal,
  },
  calenderContainer: {
    height: 378,
    //width: 382,
    backgroundColor: COLORS.WHITE,
    borderRadius: 22,
    paddingHorizontal: padding.extraLarge,
    //  marginHorizontal: margin.generic,
    marginBottom: sizes.h5,
    paddingVertical: 28,
    justifyContent: 'center',
  },
  Container: {
    flex: 1,
  },
  garbageContainer: {
    // flex:2,
    paddingHorizontal: padding.generic,
    backgroundColor: COLORS.WHITE,
    paddingBottom: padding.generic,
    paddingTop: padding.large,
  },
  dailyView: {
    marginTop: hp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calendarView: {
    marginTop: margin.big,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText_1: {
    fontFamily: FONTS.ROBOTO_BOLD,
    fontSize: sizes.h1,
    color: COLORS.PRIMARY,
  },
  headerText_2: {
    fontFamily: FONTS.ROBOTO_REGULAR,
    fontSize: sizes.h4,
    color: COLORS.PRIMARY,
  },
  headerText_3: {
    fontFamily: FONTS.ROBOTO_REGULAR,
    fontSize: sizes.h8,
    color: COLORS.WHITE,
  },
  countView: {
    height: wp(24),
    width: wp(24),
    borderRadius: wp(4),
    backgroundColor: COLORS.GREEN1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logsContainer: {
    flex: 1,
    marginTop: hp(24),
    marginHorizontal: hp(20),
    // marginRight: 16
  },
  subLogContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: wp(16),
  },
  logsListView: {
    // height: wp(40),
    paddingVertical: sizes.h9,
    borderRadius: wp(8),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: hp(12),
    paddingLeft: hp(24),
  },
  weightText: {
    color: COLORS.GREEN1,
    fontSize: sizes.h6,
    fontWeight: '400',
    fontFamily: FONTS.ROBOTO_REGULAR,
  },
  missedText: {
    color: COLORS.WHITE,
    fontSize: sizes.h6,
    fontWeight: '400',
    fontFamily: FONTS.ROBOTO_REGULAR,
  },
  creditText: {
    color: COLORS.MISSED_YELLOW,
    fontSize: sizes.h6,
    fontFamily: FONTS.ROBOTO_REGULAR,
  },
  compositionView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  compositionText: {
    color: COLORS.WHITE,
    fontSize: sizes.h8,
    fontWeight: '400',
    fontFamily: FONTS.ROBOTO_REGULAR,
  },
  compositionContainer: {
    flex: 1,
    ...row,
    ...spaceBetween,
    marginRight: wp(40),
  },
});
