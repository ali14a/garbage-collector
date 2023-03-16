import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, Pressable } from 'react-native';
import { STRING } from '../../../utils/constant/strings';
import { margin } from '../../../utils/styles/globalStyle';
import { hp } from '../../../utils/styles/responsive';
import { styles } from '../Profile.styles';
import { IMAGE } from '../../../utils/constant/images';


const Residence = ({ data,showOwner,showTenant}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.subContainer}>
            {
                showOwner && <Text style={styles.heading}>{STRING.OWNED_PROPERTIES}</Text>
            }
            {
                showTenant &&
                <Text style={styles.heading}>{STRING.RESIDENCE}</Text>
            }
            {
                showOwner && <View style={styles.contactContainer}>
                    {
                        data.map((item, index) => {
                            return (
                                <Pressable style={styles.subContactContainer} 
                                onPress={() => navigation.navigate('Owner Building', {
                                    property: item,
                                })} 
                                >
                                    <Image source={IMAGE.settings} style={{ height: hp(36), width: hp(36) }} />
                                    <View style={{ marginLeft: margin.big }}>
                                        <Text style={styles.subHeading} >{item.key}</Text>
                                        <Text style={styles.text}>{item.fullAddress}</Text>
                                    </View>
                                </Pressable>

                            )
                        })
                    }

                </View>
            }
             {
                showTenant && <View style={styles.contactContainer}>
                    {
                        data.map((item, index) => {
                            return (
                                <Pressable style={styles.subContactContainer} onPress={() => navigation.navigate('Tenant Building', {
                                    property: item,
                                })} >
                                    <Image source={IMAGE.settings} style={{ height: hp(36), width: hp(36) }} />
                                    <View style={{ marginLeft: margin.big }}>
                                        <Text style={styles.subHeading} >{item.key}</Text>
                                        <Text style={styles.text}>{item.fullAddress}</Text>
                                    </View>
                                </Pressable>

                            )
                        })
                    }

                </View>
            }
        </View>
    )
}

export default Residence;

Residence.defaultProps ={
    showTenant :true,
    showOwner :true
}

