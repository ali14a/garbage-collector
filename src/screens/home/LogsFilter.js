import React from 'react'
import { Text, View } from 'react-native'
import { COLORS} from '../../utils/styles/theme';
import { hp, wp } from '../../utils/styles/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { margin, mediumText,  sizes,} from '../../utils/styles/globalStyle';


const LogsFilter = ({ data, index }) => {

    return (
        <>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <Ionicons
                    name={data.selected ? "checkmark-circle" : "checkmark-circle-outline"}
                    style={{
                        fontSize: sizes.h2,
                        color: COLORS.PRIMARY
                    }} />
                <View>
                    {data.title === '' ? null :
                        <Text style={[mediumText,{
                            marginLeft: margin.normal,
                            fontSize:sizes.h6,
                            fontWeight:'500',
                            color:COLORS.PRIMARY
                        }]}>
                            {data.title}
                        </Text>
                    }
                    <Text style={[mediumText,{
                            marginLeft: margin.normal,
                            fontSize:sizes.h6,
                            fontWeight:'500',
                            color:COLORS.B7
                        }]}>
                        {data.subtitle}
                    </Text>
                </View>
            </View>
            {
                index !== (data.length - 1) &&
                <View
                    style={{
                        width: wp(346),
                        borderWidth: hp(0.5),
                        borderColor: COLORS.PRIMARY_LIGHT,
                        marginVertical: margin.generic
                    }}
                />
            }
        </>
    )
}
export default LogsFilter