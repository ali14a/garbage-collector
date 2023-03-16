import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Pressable,Image } from 'react-native';
import { STRING } from '../../../utils/constant/strings';
import { margin } from '../../../utils/styles/globalStyle';
import { hp } from '../../../utils/styles/responsive';
import { styles } from '../Profile.styles';
import { COLORS } from '../../../utils/styles/theme';
import { IMAGE } from '../../../utils/constant/images';


const Settings = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.subContainer}>
            <Text style={styles.heading}>{STRING.SETTINGS}</Text>
            <Pressable style={styles.contactContainer} onPress={() => navigation.navigate('Edit Profile')}>
                <View style={[styles.subContactContainer, { paddingBottom: 0 }]}>
                    <Image source={IMAGE.edit} style={{ height: hp(36), width: hp(36) }} />

                    <View style={{ marginLeft: margin.big }}>
                        <Text style={styles.text}>{STRING.EDIT_YOUR_PROFILE}</Text>
                        <Text style={[styles.subHeading, { color: COLORS.DA }]}>{STRING.TAP_TO_EDIT}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default Settings;