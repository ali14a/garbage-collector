import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, Pressable, } from 'react-native'
import CustomHeader from '../../../components/CustomHeader';
import { IMAGE } from '../../../utils/constant/images';
import { STRING } from '../../../utils/constant/strings';
import { margin } from '../../../utils/styles/globalStyle';
import { hp, wp } from '../../../utils/styles/responsive';
import { styles } from './EditProfile.styles';


const EditProfile = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <CustomHeader title={STRING.EDIT_PROFILE} />
            <View style={styles.subContainer}>
                <Image resizeMode="cover" source={{ uri: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' }}
                    style={styles.userImg} />
                <Text style={styles.heading}>{STRING.CHANGE_PROFILE_PIC}</Text>
            </View>
            <Pressable style={styles.subContainer} onPress={() => navigation.navigate('Change Password')}>
                <Image source={IMAGE.key} style={{ height: hp(30), width: wp(30), marginHorizontal: margin.normal }} />
                <View style={{ marginLeft: margin.extraLarge + margin.tiny }}>
                    <Text style={styles.subHeading}>{STRING.LOGIN_PASSWORD}</Text>
                    <Text style={styles.text}>xxxxxx</Text>
                </View>
            </Pressable>
            <Pressable style={styles.subContainer} onPress={() => navigation.navigate('Change Password')}>
                <Image source={IMAGE.key} style={{ height: hp(30), width: wp(30), marginHorizontal: margin.normal }} />
                <View style={{ marginLeft: margin.extraLarge + margin.tiny }}>
                    <Text style={styles.subHeading}>{STRING.TRANSACTION_PASSWORD}</Text>
                    <Text style={[styles.text]}>xxxxxx</Text>
                </View>
            </Pressable>

            <View style={{flex:0.9,justifyContent:'flex-end'}}>
                <Pressable style={styles.saveButton} onPress={() => { }}>
                    <Text style={styles.saveText}>{STRING.SAVE}</Text>
                </Pressable>
            </View>


        </View>
        
    )
}

export default EditProfile;