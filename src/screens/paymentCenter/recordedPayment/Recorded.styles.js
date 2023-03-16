import { StyleSheet } from 'react-native';
import { borderRadius, center, elevation, margin, mediumText, padding, row, sizes } from '../../../utils/styles/globalStyle';
import {  wp } from '../../../utils/styles/responsive';
import { COLORS, FONTS } from '../../../utils/styles/theme';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...center,
        backgroundColor: COLORS.E5,
        paddingHorizontal: padding.generic,
    },
    centeredView: {
        ...elevation,
        backgroundColor: COLORS.WHITE,
        borderRadius: borderRadius.generic + borderRadius.tiny,
        width: wp(382), 
        paddingHorizontal: padding.generic,
       
      
    },
    backContainer: {
        marginHorizontal: margin.tiny,
        marginTop:margin.small
    },
    recordedText: {
        ...mediumText,
        fontWeight: 'bold',
        fontFamily: FONTS.ROBOTO_REGULAR,
        fontSize: sizes.h1

    },
    paymentDetailContainer: {
        //  marginTop: margin.extraLarge,
        ...row,
    },
    typeText_1: {
        ...mediumText,
        fontFamily: FONTS.ROBOTO_REGULAR,
        color: COLORS.E2
    },
    typeText_2: {
        ...mediumText,
        fontFamily: FONTS.ROBOTO_REGULAR,
        color: COLORS.PRIMARY
    },
    okayButton: {
        height: wp(36),
        width: wp(334),
        backgroundColor: COLORS.PRIMARY,
        borderRadius: borderRadius.large + borderRadius.tiny,
        ...center,
        marginVertical: margin.extraLarge
    },
    okayText: {
        ...mediumText,
        color: COLORS.WHITE,
        fontFamily: FONTS.ROBOTO_REGULAR,
        fontWeight: '400'
    },


})