import { StyleSheet } from "react-native";
import { padding, sizes } from "../../utils/styles/globalStyle";
import { deviceWidth, hp } from "../../utils/styles/responsive";
import { COLORS } from "../../utils/styles/theme";

export const styles = StyleSheet.create({ 
    container:{
        flex:1,
        paddingHorizontal: padding.generic,
        marginTop: hp(52),
        paddingBottom: padding.generic,
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
        width: deviceWidth / 3,
      },
})