import React from 'react';
import { View, Text } from 'react-native';
import { center, sizes } from '../../utils/styles/globalStyle';
import { COLORS, FONTS } from '../../utils/styles/theme';


const RequestHistory = () => {
    return (
        <View style={{ flex: 1, ...center }}>
            <Text style={{
                color: COLORS.C5,
                fontFamily: FONTS.ROBOTO_MEDIUM,
                fontSize: sizes.h7,
            }}>Coming Soon</Text>
        </View>

    )

}

export default RequestHistory;