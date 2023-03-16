import { StyleSheet } from 'react-native';
import { mediumText, padding, sizes } from '../../../utils/styles/globalStyle';
import { hp } from '../../../utils/styles/responsive';
import { COLORS } from '../../../utils/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: COLORS.WHITE,
        paddingHorizontal: padding.generic
    },
    headerText: {
        ...mediumText,
        fontSize: sizes.h1,
        fontWeight: '700',
    },
    map: {
        width: '100%',
        height: '100%'
    }
})

