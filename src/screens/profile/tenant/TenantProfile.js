import React from 'react';
import { View, Text, Image, ScrollView ,Pressable} from 'react-native';
import { styles } from '../Profile.styles';
import { UserHeader } from '..';
import { ContactDetails } from '..';

const TenantProfile =({route})=>{
    const {people} = route.params
     
    return(
        <View style={styles.container}>
            <UserHeader name={people.name} userType={people.title} profilePic={people.pic} />
            <ContactDetails data ={people}/>
        </View>

    )
}

export default TenantProfile;