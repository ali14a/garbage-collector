import React from 'react';
import { View, Text, Image } from 'react-native';
import { STRING } from '../../../utils/constant/strings';
import { margin } from '../../../utils/styles/globalStyle';
import { hp, wp } from '../../../utils/styles/responsive';
import { styles } from '../Profile.styles';
import { IMAGE } from '../../../utils/constant/images';



const ContactDetails = ({ data }) => {
    return (
        <View style={styles.subContainer}>
            <Text style={styles.heading}>{STRING.CONTACT_DETAILS}</Text>
            <View style={styles.contactContainer}>
                <View style={styles.subContactContainer}>
                    <Image source={IMAGE.settings} style={{ height: hp(36), width: hp(36) }} />
                    <View style={{ marginLeft: margin.big }}>
                        <Text style={styles.subHeading} >{STRING.ADDRESS}</Text>
                        <Text style={styles.text}>{data.address}</Text>
                    </View>
                </View>
                <View style={styles.subContactContainer}>
                    <Image source={IMAGE.phone} style={{ height: hp(36), width: hp(36) }} />
                    <View style={{ marginLeft: margin.big }}>
                        <Text style={styles.subHeading} >{STRING.PHONE}</Text>
                        <Text style={styles.text}>{data.phone}</Text>
                    </View>
                </View>
                <View style={[styles.subContactContainer, { paddingBottom: 0 }]}>
                    <Image source={IMAGE.mail} style={{ height: hp(36), width: hp(36) }} />
                    <View style={{ marginLeft: margin.big }}>
                        <Text style={styles.subHeading} >{STRING.EMAIL}</Text>
                        <Text style={styles.text}>{data.email}</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default ContactDetails;