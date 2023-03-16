import { StyleSheet } from 'react-native';
import { borderRadius, center, margin, mediumText, padding, row, sizes, spaceBetween } from '../../../utils/styles/globalStyle';
import { hp, wp } from '../../../utils/styles/responsive';
import { COLORS, FONTS } from '../../../utils/styles/theme';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: padding.generic,
        paddingTop: padding.normal,
    },
    subContainer: {
        marginTop: padding.extraLarge,
        backgroundColor: COLORS.WHITE,
        borderRadius: borderRadius.medium,
        paddingVertical: padding.normal,
        paddingHorizontal: padding.small,
        ...row,
        alignItems: 'center'
    },
    userImg: {
        height: wp(60),
        width: wp(60),
        borderRadius: borderRadius.medium,
        borderColor: COLORS.PRIMARY,
        marginRight: margin.big

    },
    heading: {
        ...mediumText,
        fontFamily: FONTS.ROBOTO_REGULAR,
        fontWeight: '500',
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
        fontFamily: FONTS.ROBOTO_REGULAR

    },
    saveButton: {
        height: wp(40),
        backgroundColor: COLORS.C4,
        borderRadius: borderRadius.big,
        ...center,
    },
    saveText: {
        ...mediumText,
        fontWeight: '400',
        color: COLORS.WHITE,
        textTransform: 'uppercase'
    },
    spocNameContainer: {
        ...row,
        ...spaceBetween,
        marginBottom: margin.generic
    },
    spocSubContainer: {
        marginBottom: margin.generic
    },
    spocGenderContainer: {
        ...row,
    },
    input: {
        height: wp(40),
        width: wp(184),
        backgroundColor: COLORS.WHITE,
        borderRadius: borderRadius.normal,
        marginTop: margin.small,
    },
    input_2: {
        height: wp(40),
        backgroundColor: COLORS.WHITE,
        borderRadius: borderRadius.normal,
        marginTop: margin.small,
    },
    radioButton: {
        ...row,
        marginTop: margin.generic,
        marginRight:margin.extraLarge + margin.tiny
    }
})