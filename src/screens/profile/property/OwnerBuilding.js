import React from 'react';
import { View, Text, Image, ScrollView, Pressable,} from 'react-native';
import { STRING } from '../../../utils/constant/strings';
import { borderRadius, margin, spaceBetween } from '../../../utils/styles/globalStyle';
import { hp } from '../../../utils/styles/responsive';
import { styles } from '../Profile.styles';
import { IMAGE } from '../../../utils/constant/images';
import { UserHeader } from '..';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../../utils/styles/theme';
import Clipboard from '@react-native-community/clipboard';
import Toast from 'react-native-toast-message';


const OwnerBuilding = ({ route }) => {
    const { property } = route.params
    const { building, people } = property
    const navigation = useNavigation()

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

    const copyTag = () => {
        Clipboard.setString(building.rfid);
        _showToast('Tag Copied','success')
    }
    const copyAddress = () => {
          Clipboard.setString(building.localAddress);
          _showToast('address Copied','success')
      }
  
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <UserHeader residence={false} address={property} showUserImg={false} />
                <View style={styles.subContainer}>
                    <Text style={styles.heading}>{STRING.BUILDING_DETAILS}</Text>
                    <View style={styles.contactContainer}>
                        <View style={styles.subContactContainer}  >
                            <Image source={IMAGE.settings} style={{ height: hp(36), width: hp(36) }} />
                            <View style={{ marginLeft: margin.big }}>
                                <Text style={styles.subHeading} >{STRING.BUILDING_TYPE}</Text>
                                <Text style={styles.text}>{building.type}</Text>
                            </View>
                        </View>
                        <View style={styles.subContactContainer}  >
                            <Image source={IMAGE.holding} style={{ height: hp(36), width: hp(36) }} />
                            <View style={{ marginLeft: margin.big }}>
                                <Text style={styles.subHeading} >{STRING.HOLDING}</Text>
                                <Text style={styles.text}>{building.holdingId}</Text>
                            </View>
                        </View>
                        <View style={styles.subContactContainer}  >
                            <Image source={IMAGE.location} style={{ height: hp(36), width: hp(36) }} />
                            <View style={{ marginLeft: margin.big, flex: 1 }}>
                                <Text style={styles.subHeading} >{STRING.LOCAL_ADDRESS}</Text>
                                <Text style={styles.text}>{building.localAddress}</Text>
                            </View>
                            <Pressable onPress={() => copyAddress()}>
                            <Image source={IMAGE.copy} style={{ height: hp(24), width: hp(24), }} />
                            </Pressable>

                        </View>
                        <View style={styles.subContactContainer}  >
                            <Image source={IMAGE.tag} style={{ height: hp(36), width: hp(36) }} />
                            <View style={{ marginLeft: margin.big, flex: 1 }}>
                                <Text style={styles.subHeading} >{STRING.BUILDING_RFID}</Text>

                                <Text style={styles.text}>{building.rfid}</Text>

                            </View>
                            <Pressable onPress={() => copyTag()}>
                                <Image source={IMAGE.copy} style={{ height: hp(24), width: hp(24), }} />
                            </Pressable>

                        </View>
                        <View style={styles.subContactContainer}  >
                            <Image source={IMAGE.area} style={{ height: hp(36), width: hp(36) }} />
                            <View style={{ marginLeft: margin.big }}>
                                <Text style={styles.subHeading} >{STRING.APPROX_AREA}</Text>
                                <Text style={styles.text}>{building.area}</Text>
                            </View>
                        </View>
                        <View style={styles.subContactContainer}  >
                            <Image source={IMAGE.user} style={{ height: hp(36), width: hp(36) }} />
                            <View style={{ marginLeft: margin.big }}>
                                <Text style={styles.subHeading} >{STRING.MEMBER}</Text>
                                <Text style={styles.text}>{building.member}</Text>
                            </View>
                        </View>
                        <View style={styles.subContactContainer}  >
                            <Image source={IMAGE.bed} style={{ height: hp(36), width: hp(36) }} />
                            <View style={{ marginLeft: margin.big }}>
                                <Text style={styles.subHeading} >{STRING.BEDROOMS}</Text>
                                <Text style={styles.text}>{building.bedroom}</Text>
                            </View>
                        </View>
                        <View style={styles.subContactContainer}  >
                            <Image source={IMAGE.kitchen} style={{ height: hp(36), width: hp(36) }} />
                            <View style={{ marginLeft: margin.big }}>
                                <Text style={styles.subHeading} >{STRING.KITCHEN}</Text>
                                <Text style={styles.text}>{building.kitchen}</Text>
                            </View>
                        </View>
                        <View style={styles.subContactContainer}  >
                            <Image source={IMAGE.toilet} style={{ height: hp(36), width: hp(36) }} />
                            <View style={{ marginLeft: margin.big }}>
                                <Text style={styles.subHeading} >{STRING.TOILETS}</Text>
                                <Text style={styles.text}>{building.toilet}</Text>
                            </View>
                        </View>
                        <View style={styles.subContactContainer}  >
                            <Image source={IMAGE.balcony} style={{ height: hp(36), width: hp(36) }} />
                            <View style={{ marginLeft: margin.big }}>
                                <Text style={styles.subHeading} >{STRING.BALCONIES}</Text>
                                <Text style={styles.text}>{building.balconies}</Text>
                            </View>
                        </View>
                    </View>

                </View>

                <View style={styles.subContainer}>
                    <Text style={styles.heading}>{STRING.PEOPLE}</Text>
                    <View style={styles.contactContainer}>
                        {
                            people.map((item, index) => {
                                return (
                                    <>
                                        {
                                            item.type === 'Owner' &&
                                            <View style={styles.subContactContainer}>
                                                <Image source={IMAGE.owner} style={{ height: hp(36), width: hp(36), marginRight: margin.big, }} />
                                                <View style={{ marginLeft: margin.big, flex: 1, }}>
                                                    <Text style={[styles.subHeading, { textTransform: 'uppercase' }]} >{item.type}</Text>
                                                    <Text style={styles.text}>{item.name}</Text>

                                                </View>
                                            </View>
                                        }

                                        {
                                            item.type === 'Spoc' &&
                                            <Pressable style={styles.subContactContainer}
                                                onPress={() => navigation.navigate('Spoc', {
                                                    people: item,
                                                })}
                                            >
                                                <Image source={IMAGE.phone} style={{ height: hp(36), width: hp(36), marginRight: margin.big, }} />


                                                <View style={{ marginLeft: margin.big, flex: 1, }}>
                                                    <Text style={[styles.subHeading, { textTransform: 'uppercase' }]} >{item.type}</Text>

                                                    <View style={{ flexDirection: 'row', alignItems: 'center', ...spaceBetween }}>
                                                        <Text style={styles.text}>{item.name}</Text>
                                                        <Image source={IMAGE.edit} style={{ height: hp(24), width: hp(24)}} />
                                                    </View>
                                                </View>
                                            </Pressable>

                                        }
                                        {
                                            item.type === 'Tenant' &&
                                            <Pressable style={styles.subContactContainer}
                                                onPress={() => navigation.navigate('Tenant Dashboard', {
                                                    people: item,
                                                })}>
                                                <Image source={{ uri: item.pic }}
                                                    style={{ height: hp(60), width: hp(60), borderRadius: borderRadius.extraBig }} />
                                                <View style={{ marginLeft: margin.big, flex: 1, }}>
                                                    <Text style={[styles.subHeading, { textTransform: 'uppercase' }]} >{item.type}</Text>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', ...spaceBetween }}>
                                                        <Text style={styles.text}>{item.name}</Text>
                                                        {
                                                            item.dueAmount == 0 ? <Text style={styles.due}>{STRING.TOTAL_DUE} {'₹'} {item.dueAmount}</Text>
                                                                :
                                                                <Text style={[styles.due, { color: COLORS.RED }]}>{STRING.TOTAL_DUE} {'₹'} {item.dueAmount}</Text>
                                                        }

                                                    </View>
                                                </View>
                                            </Pressable>
                                        }
                                    </>
                                )
                            })
                        }

                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

export default OwnerBuilding;