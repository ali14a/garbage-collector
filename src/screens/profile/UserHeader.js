import {useNavigation} from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { IMAGE } from '../../utils/constant/images'
import { wp, hp } from '../../utils/styles/responsive';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { borderRadius, margin, mediumText, padding, sizes } from '../../utils/styles/globalStyle';
import { COLORS } from '../../utils/styles/theme';


const UserHeader = ({ showUserImg, name, profilePic, userType, residence, address, showBackBtn }) => {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    };
    return (
        <View style={{}}>
            <Image width={wp(40)} height={hp(50)} source={IMAGE.userBg} />
            {showBackBtn && (
                <Pressable onPress={goBack} style={styles.goBackContainer}>
                    <FontAwesome name="angle-left" size={hp(36)} color={COLORS.WHITE} />
                </Pressable>
            )}
            <View style={styles.userContainer}>
                {
                    showUserImg && (<Image resizeMode="cover" source={{ uri: profilePic }}
                        style={styles.userImg} />
                    )}
                {
                    residence && <View style={styles.nameView}>
                        <Text style={styles.userName}>{name}</Text>
                        <Text style={styles.userType}>{" "}{userType}</Text>

                    </View>
                }
                {
                    address && <View style={styles.nameView}>
                        <Text style={styles.userName}>{address.house}{" , "}{address.floor}</Text>
                        <Text style={styles.userType}>{address.locality}</Text>

                    </View>
                }


            </View>
        </View>
    )
}

export default UserHeader;

UserHeader.defaultProps = {
    showUserImg: true,
    residence: true,
    showBackBtn: true,
};

export const styles = StyleSheet.create({
    goBackContainer: {
        width: wp(60),
        paddingTop: padding.extraLarge,
        paddingBottom: padding.generic,
        paddingLeft:padding.generic,
        position:'absolute'
    },
    userContainer: {

        position: 'absolute',
        alignSelf: 'center',
        bottom: wp(15)
    },
    userImg: {
        height: wp(104),
        width: wp(104),
        borderRadius: wp(52),
        borderColor: COLORS.PRIMARY,
        borderWidth: hp(2),
        alignSelf: 'center',
    },
    nameView: {
        backgroundColor: COLORS.WHITE,
        marginTop: margin.small,
        height: wp(79),
        width: wp(234),
        borderRadius: borderRadius.big + borderRadius.small,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userName: {
        ...mediumText,
        fontWeight: '700',
        fontSize: sizes.h4
    },
    userType: {
        ...mediumText,
        color: COLORS.B7,
        fontSize: sizes.h7,
        fontWeight: '400',
        textTransform: 'uppercase'
    },
});

