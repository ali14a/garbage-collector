import { StyleSheet } from 'react-native';
import { hp, wp } from '../../utils/styles/responsive';
import { COLORS, FONTS } from '../../utils/styles/theme';
import { borderRadius, margin, mediumText, padding, sizes } from '../../utils/styles/globalStyle';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: hp(30)
    },
    subContainer: {
        paddingTop: padding.big,
        marginHorizontal: margin.generic,
    },
    contactContainer: {
        marginTop: margin.big,
        backgroundColor: COLORS.WHITE,
        borderRadius: borderRadius.medium,
        // paddingVertical: padding.normal,
        paddingHorizontal: padding.small,
        justifyContent: 'center'
    },
    subContactContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: margin.small,
        marginVertical: margin.generic,
    },
    heading: {
        ...mediumText,
        fontSize: sizes.h7,
        color: COLORS.E2,
        fontFamily: FONTS.ROBOTO_REGULAR,
        fontWeight: '500',
        textTransform: 'uppercase',
    },
    subHeading: {
        ...mediumText,
        fontWeight: '400',
        fontFamily: FONTS.ROBOTO_REGULAR,
        fontSize: sizes.h7,
        color: COLORS.E2,
    },
    text: {
        ...mediumText,
        fontWeight: '500',
        fontFamily: FONTS.ROBOTO_REGULAR,
        marginTop:margin.small

    },
    due:{
        ...mediumText,
        fontWeight: '400',
        fontFamily: FONTS.ROBOTO_REGULAR,
        fontSize: sizes.h7,
        color: COLORS.C2,
    }
})