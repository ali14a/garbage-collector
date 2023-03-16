import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { styles } from '../Profile.styles';
import { UserHeader } from '..';
import { ContactDetails } from '..';
import { STRING } from '../../../utils/constant/strings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../../utils/styles/theme';
import { hp } from '../../../utils/styles/responsive';
import { margin } from '../../../utils/styles/globalStyle';


const Spoc = ({ route }) => {
    const navigation = useNavigation()
    const { people } = route.params


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container} >
                <UserHeader name={people.name} userType={people.title} showUserImg={false} />
                <ContactDetails data={people} />

                <View style={styles.subContainer}>
                    <Text style={styles.heading}>{STRING.EDIT_SPOC}</Text>
                    <Pressable style={styles.contactContainer} onPress={() => navigation.navigate('Edit Spoc')}>
                        <View style={[styles.subContactContainer, { paddingBottom: 0 }]}>
                            <MaterialIcons name="edit" size={hp(36)} color={COLORS.PRIMARY} />
                            <View style={{ marginLeft: margin.big }}>
                                <Text style={styles.text}>{STRING.UPDATE_SPOC}</Text>
                                <Text style={[styles.subHeading, { color: COLORS.DA }]}>{STRING.TAP_TO_EDIT}</Text>
                            </View>
                        </View>
                    </Pressable>
                </View>
            </View>
        </ScrollView>

    )
}

export default Spoc;