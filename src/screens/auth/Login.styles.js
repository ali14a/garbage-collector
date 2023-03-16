import { StyleSheet } from 'react-native';
import { borderRadius, center, margin, mediumText, padding, row, sizes, spaceBetween } from '../../utils/styles/globalStyle';
import { hp, wp } from '../../utils/styles/responsive';
import { COLORS, FONTS } from '../../utils/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: margin.maximum,
    },
    logo: {
        height: hp(116),
        width: wp(116),
        marginTop: wp(135),
        borderRadius: borderRadius.normal
    },
    welcome: {
        ...mediumText,
        fontSize: sizes.h2,
        color: COLORS.DARK_GREY,
        marginTop: margin.normal,
        fontFamily: FONTS.ROBOTO_REGULAR,
    },
    citygen: {
        ...mediumText,
        fontSize: sizes.h2,
        color: COLORS.DARK_GREY,
        fontWeight: 'bold',
        fontFamily: FONTS.ROBOTO_REGULAR
    },
    numberContainer: {
        marginTop: hp(52),
    },
    mobile: {
        ...mediumText,
        fontSize: sizes.h4,
        color: COLORS.DARK_GREY
    },
    inputContainer: {
        borderWidth: hp(1),
        borderRadius: borderRadius.small,
        borderColor: COLORS.SKY_BLUE,
        marginTop: margin.normal,
        paddingHorizontal: padding.generic,
        height: wp(48),
        alignItems: 'center',
        ...row
    },
    code: {
        ...mediumText,
        fontSize: sizes.h4,
        color: COLORS.SKY_BLUE,
        fontWeight: '500'
    },
    input: {
        flex: 1,
        marginLeft: margin.small
    },
    nextButton: {
        height: wp(40),
        backgroundColor: COLORS.PRIMARY,
        borderRadius: borderRadius.big,
        ...center,
    },
    nextText: {
        ...mediumText,
        fontWeight: '400',
        color: COLORS.WHITE,
        textTransform: 'uppercase'
    },
    otpContainer: {
        marginTop: hp(26),
        ...row,
        ...spaceBetween
    },
    otpInput: {
        width: wp(48),
        height: wp(48),
        color: COLORS.BLACK,
        fontSize: sizes.h4,
        textAlign: 'center',
        borderWidth: hp(1),
        borderRadius: borderRadius.small,
        borderColor: COLORS.SKY_BLUE
    },
    resendButton:{
        marginVertical:margin.maximum
    },
    resend:{
        ...mediumText,
        fontSize:sizes.h5,
        fontWeight:'500',
        fontFamily:FONTS.ROBOTO_REGULAR,
        textAlign:'center'
    }

})