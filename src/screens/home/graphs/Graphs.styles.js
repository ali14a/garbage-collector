import {StyleSheet} from 'react-native';
import {
  borderRadius,
  margin,
  padding,
  sizes,
} from '../../../utils/styles/globalStyle';
import {deviceWidth, hp, wp} from '../../../utils/styles/responsive';
import {COLORS} from '../../../utils/styles/theme';

export const styles = StyleSheet.create({
  graphsContainer: {
    backgroundColor: COLORS.WHITE,
    //marginHorizontal: margin.generic,
    paddingHorizontal: padding.generic,
    paddingBottom: padding.generic,
    borderRadius: borderRadius.big,
   // marginBottom: wp(37),
  
    // height: hp(330),
  },
  valueContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: wp(36),
    height: hp(73),
    width: wp(132),
  },
  percText: {
    fontSize: sizes.h2,
    fontWeight: '500',
  },
  daysText: {
    fontSize: sizes.h5,
    fontWeight: '400',
  },
  tabbar: {
    backgroundColor: COLORS.WHITE,
  },
  indicator: {
    backgroundColor: COLORS.PRIMARY,
    height: hp(4),
  },

  label: {
    fontSize: sizes.h8,
  },
  tabStyle: {
    width: deviceWidth / 3,
  },
  textTab: {
    fontSize: sizes.h6,
    fontWeight: 'bold',
    color: COLORS.B7,
  },

  textTabActive: {
    fontSize: sizes.h6,
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
  },
});
