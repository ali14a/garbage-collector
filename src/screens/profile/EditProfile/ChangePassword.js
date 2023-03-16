import React from 'react';
import { View, Text, Pressable, } from 'react-native'
import CustomHeader from '../../../components/CustomHeader';
import { STRING } from '../../../utils/constant/strings';
import { styles } from './EditProfile.styles';


const ChangePassword =() =>{
    return(
        <View style={styles.container}>
            <CustomHeader title={STRING.CHANGE_PASSWORD}/>

            <View style={{flex:0.9,justifyContent:'flex-end'}}>
                <Pressable style={styles.saveButton} onPress={() => { }}>
                    <Text style={styles.saveText}>{STRING.SAVE}</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default ChangePassword;