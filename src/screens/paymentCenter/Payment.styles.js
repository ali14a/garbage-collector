import {StyleSheet} from 'react-native';
import {
  borderRadius,
  center,
  margin,
  mediumText,
  padding,
  row,
  sizes,
  spaceAround,
  spaceBetween,
} from '../../utils/styles/globalStyle';
import {deviceWidth, hp, wp} from '../../utils/styles/responsive';
import {COLORS, FONTS} from '../../utils/styles/theme';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: padding.generic,
    marginTop: hp(52),
    paddingBottom: padding.generic,
  },
  headerText: {
    ...mediumText,
    fontSize: sizes.h1,
    fontWeight: '700',
    marginBottom: margin.generic,
  },
  addressContainer: {
    ...row,
    ...spaceBetween,
    marginTop: margin.small,
  },
  dueText: {
    ...mediumText,
    fontSize: sizes.h5,
    fontWeight: '400',
    color: COLORS.E1,
  },
  inputText: {
    marginTop: margin.large,
    marginBottom: margin.big,
  },
  paymentContainer: {
    ...row,
    ...spaceBetween,
  },
  incrementContainer: {
    ...row,
    ...spaceAround,
    alignItems: 'center',
    height: wp(40),
    width: wp(117),
    backgroundColor: COLORS.WHITE,
    borderRadius:borderRadius.medium
  },
  payButton: {
    ...center,
    ...row,
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY,
    height: wp(40),
    width: wp(249),
    marginLeft: margin.generic,
    borderRadius: borderRadius.big,
  },
  payText: {
    ...mediumText,
    color: COLORS.WHITE,
    fontFamily: FONTS.ROBOTO_REGULAR,
    fontWeight: '400',
  },
  counter: {
    ...mediumText,
    color: COLORS.C4,
    fontSize: sizes.h2,
    fontFamily: FONTS.ROBOTO_REGULAR,
    fontWeight: '400',
  },
  countNum: {
    ...mediumText,
    fontSize: sizes.h5,
    fontFamily: FONTS.ROBOTO_REGULAR,
    fontWeight: '400',
  },

  textTab: {
    ...mediumText,
    fontSize: sizes.h7,
    fontWeight: '400',
    color: COLORS.C5,
  },
  paymentTextActive: {
    ...mediumText,
    fontWeight: '500',
    fontSize: sizes.h7,
  },

  monthContainer: {
    backgroundColor: COLORS.WHITE,
    height: hp(76),
    marginBottom: margin.generic,
    borderRadius: borderRadius.generic + borderRadius.tiny,
    alignItems: 'center',
    ...row,
  },
  monthActiveContainer: {
    backgroundColor: COLORS.WHITE,
    height: hp(76),
    borderColor: COLORS.HAZARD,
    borderWidth: 1,
    marginBottom: margin.generic,
    borderRadius: borderRadius.generic + borderRadius.tiny,
    alignItems: 'center',
    ...row,
  },
  iconContainer: {
    height: hp(60),
    width: wp(60),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: margin.normal,
  },
  editIcon: {
    fontSize: sizes.h4,
    color: COLORS.PRIMARY,
  },
  editActiveIcon: {
    fontSize: sizes.h4,
    color: COLORS.HAZARD,
  },
  paidContainer: {
    marginHorizontal: margin.large,
    flex: 1,
  },
  monthText: {
    ...mediumText,
    fontFamily: FONTS.ROBOTO_REGULAR,
  },
  paidText: {
    ...mediumText,
    fontSize: sizes.h7,
    color: COLORS.C2,
  },
  paidActiveText: {
    ...mediumText,
    fontSize: sizes.h7,
    color: COLORS.HAZARD,
  },
  scene: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: COLORS.F2,
  },
  indicator: {
    backgroundColor: COLORS.PRIMARY,
    height: hp(4),
  },
  label: {
    fontWeight: 'bold',
    fontSize: sizes.h7,
  },
  tabStyle: {
    width: deviceWidth / 1.8,
  },
  amountContainer:{
    marginVertical:margin.generic
  },
  payableAmount:{
    ...mediumText,
    fontWeight:'700',
    fontSize:sizes.h6,
    marginBottom:margin.small
  },
  credit:{
    ...mediumText,
    fontFamily:FONTS.ROBOTO_REGULAR,
    fontSize:sizes.h6,
    marginBottom:margin.small
  },
  onlineContainer:{
    backgroundColor: COLORS.WHITE,
    height: hp(76),
    borderRadius: borderRadius.generic + borderRadius.tiny,
    alignItems: 'center',
    ...row,
    paddingHorizontal:padding.normal,
    marginTop:margin.maximum
  }
  
});
