import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { STRING } from '../../../utils/constant/strings';
import { styles } from './EditProfile.styles';
import { CustomHeader } from '../../../components';
import { COLORS } from '../../../utils/styles/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { hp } from '../../../utils/styles/responsive';
import { margin } from '../../../utils/styles/globalStyle';

const EditSpoc = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [email, setEmail] = useState('')
    return (
        <View style={styles.container}>
            <CustomHeader title={STRING.EDIT_UPDATE_SPOC} />
            <View style={styles.spocNameContainer}>
                <View style={{}}>
                    <Text style={[styles.subHeading, { color: COLORS.B3 }]}>{STRING.FIRST_NAME}</Text>
                    <TextInput
                        placeholder={STRING.ENTER_FIELD}
                        placeholderTextColor={COLORS.C2}
                        value={firstName}
                        onChangeText={firstName => setFirstName(firstName)}
                        style={styles.input}
                    />
                </View>
                <View style={{}}>
                    <Text style={[styles.subHeading, { color: COLORS.B3 }]}>{STRING.LAST_NAME}</Text>
                    <TextInput
                        placeholder={STRING.ENTER_FIELD}
                        placeholderTextColor={COLORS.C2}
                        value={lastName}
                        onChangeText={lastName => setLastName(lastName)}
                        style={styles.input}
                    />
                </View>

            </View>
            <View style={styles.spocSubContainer}>
                <Text style={[styles.subHeading, { color: COLORS.B3 }]}>{STRING.GENDER}</Text>
                <View style={styles.spocGenderContainer}>           
                         <View style={styles.radioButton}>
                    <MaterialCommunityIcons
                        name="radiobox-blank"
                        size={hp(20)}
                        color={COLORS.B3}
                        style={{ marginRight: margin.small }}
                        onPress={()=>{}} />
                    <Text style={[styles.subHeading, { color: COLORS.B3 }]}>{STRING.MALE}</Text>
                </View>
                    <View style={styles.radioButton}>
                        <MaterialCommunityIcons
                            name="radiobox-blank"
                            size={hp(20)}
                            color={COLORS.B3}
                            style={{ marginRight: margin.small }} 
                            onPress={()=>{}}/>
                        <Text style={[styles.subHeading, { color: COLORS.B3 }]}>{STRING.FEMALE}</Text>
                    </View>
                    <View style={styles.radioButton}>
                        <MaterialCommunityIcons
                            name="radiobox-blank"
                            size={hp(20)}
                            color={COLORS.B3}
                            style={{ marginRight: margin.small }} 
                            onPress={()=>{}}/>
                        <Text style={[styles.subHeading, { color: COLORS.B3 }]}>{STRING.OTHER}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.spocSubContainer}>
                <Text style={[styles.subHeading, { color: COLORS.B3 }]}>{STRING.CONTACT_NUMBER}</Text>
                <TextInput
                    placeholder={STRING.ENTER_CONTACT}
                    placeholderTextColor={COLORS.C2}
                    value={phoneNum}
                    onChangeText={phoneNum => setPhoneNum(phoneNum)}
                    style={styles.input_2}
                />

            </View>
            <View style={styles.spocSubContainer}>
                <Text style={[styles.subHeading, { color: COLORS.B3 }]}>{STRING.EMAIL}{" "}{STRING.ID}</Text>
                <TextInput
                    placeholder={STRING.ENTER_FIELD}
                    placeholderTextColor={COLORS.C2}
                    value={email}
                    onChangeText={email => setEmail(email)}
                    style={styles.input_2}
                />

            </View>

            <View style={{ flex: 0.9, justifyContent: 'flex-end' }}>
                <Pressable style={[styles.saveButton, { backgroundColor: COLORS.PRIMARY }]} onPress={() => { }}>
                    <Text style={styles.saveText}>{STRING.UPDATE}</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default EditSpoc;