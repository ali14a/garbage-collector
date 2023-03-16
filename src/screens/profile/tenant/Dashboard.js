import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { styles } from './Tenant.styles';
import { CustomHeader } from '../../../components';
import { STRING } from '../../../utils/constant/strings';
import Graphs from '../../home/graphs/Graphs';
import CalendarComponent from '../../home/CalendarComponent';

const Dashboard = ({ route }) => {
    const navigation = useNavigation()
    const { people } = route.params
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <CustomHeader title={[people.house, [", "], people.floor]} />
                <View style={styles.nameContainer}>
                    <Text style={styles.userName}>{people.name}</Text>
                    <Pressable onPress={() =>navigation.navigate('Tenant Profile',{people:people})}>
                        <Text style={styles.viewProfile}>{STRING.VIEW_USER_PROFILE}</Text>
                    </Pressable>

                </View>
                <Pressable style={styles.paymentContainer} onPress={() =>navigation.navigate('Payment History')}>
                    <Text style={styles.payment}>{STRING.PAYMENT_STATUS}</Text>
                    <Text style={styles.status}>{people.status}{":"}{" "}{people.dueAmount == 0 ? 'No dues' : ['₹', people.dueAmount]}</Text>
                </Pressable>
                    <Graphs />
                    <CalendarComponent />
            </View>
        </ScrollView>
    )
}

export default Dashboard;
