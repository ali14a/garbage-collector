import React from 'react';
import { View, Text, Image, Pressable, } from 'react-native';
import { STRING } from '../../../utils/constant/strings';
import { margin } from '../../../utils/styles/globalStyle';
import { hp } from '../../../utils/styles/responsive';
import { styles } from '../Profile.styles';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../../../utils/styles/theme';
import { IMAGE } from '../../../utils/constant/images';
import Clipboard from '@react-native-community/clipboard';
import Toast from 'react-native-toast-message';

const Rfid = ({ data }) => {

    const _showToast = (message, type) => {
        Toast.show({
            type,
            position: 'top',
            text1: message,
            visibilityTime: 3000,
            autoHide: true,
            topOffset: hp(50)
        });
    }
    const copyToClipboard = (tag) => {
        Clipboard.setString(tag);
        _showToast('Tag Copied','success')
    }
    return (
        <View style={styles.subContainer}>

            <Text style={styles.heading}>{STRING.BIN_RFID_DETAILS}</Text>
            <View style={styles.contactContainer}>
                {
                    data.map((item, index) => {
                        return (
                            <View style={styles.subContactContainer}>
                                {
                                    item.tag === 'Green RFID' && <Feather name="tag" size={hp(36)} color={COLORS.GREEN1} />
                                }
                                {
                                    item.tag === 'Blue RFID' && <Feather name="tag" size={hp(36)} color={COLORS.BLUE_TAG} />
                                }
                                {
                                    item.tag === 'Red RFID' && <Feather name="tag" size={hp(36)} color={COLORS.RED_TAG} />
                                }
                                <View style={{ marginLeft: margin.big, flex: 1 }}>
                                    <Text style={styles.subHeading} >{item.tag}</Text>
                                    <Text style={styles.text}>{item.tagNum}</Text>
                                </View>
                                <Pressable onPress={() => copyToClipboard(item.tagNum)}>
                                    <Image source={IMAGE.copy} style={{ height: hp(24), width: hp(24), }} />
                                </Pressable>

                            </View>
                        )
                    })
                }

            </View>
        </View>
    )
}

export default Rfid;