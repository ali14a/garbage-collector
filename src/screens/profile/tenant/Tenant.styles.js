import { StyleSheet } from "react-native";
import { borderRadius, margin, mediumText, padding, row, sizes, spaceBetween } from "../../../utils/styles/globalStyle";
import { hp, wp } from "../../../utils/styles/responsive";
import { COLORS, FONTS } from "../../../utils/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: hp(30),
        paddingHorizontal: padding.generic,
    },
    nameContainer: {
        ...row,
        ...spaceBetween,

    },
    userName: {
        ...mediumText,
        fontSize: sizes.h5,
        fontWeight: '500',
        fontFamily: FONTS.ROBOTO_REGULAR
    },
    viewProfile: {
        ...mediumText,
        color: COLORS.C2,
        fontSize: sizes.h5,
        textDecorationLine: 'underline'
    },
    paymentContainer: {
        backgroundColor:COLORS.WHITE,
        marginTop:margin.big,
        marginBottom:margin.generic,
        paddingVertical:padding.big,
        paddingHorizontal:padding.large,
        borderRadius:borderRadius.big + borderRadius.tiny,
        height:wp(99)

    },
    payment:{
        ...mediumText,
        fontSize:sizes.h7,
        color:COLORS.C4,
        fontWeight:'400',
        fontFamily:FONTS.ROBOTO_REGULAR
    },
    status:{
        ...mediumText,
        fontSize:sizes.h5,
        fontWeight:'500',
        fontFamily:FONTS.ROBOTO_REGULAR,
        marginTop:margin.normal
    }
})