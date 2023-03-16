import React from 'react';
import { View, ScrollView } from 'react-native';
import { CustomHeader } from '../../../components';
import PaymentTabs from '../../../components/PaymentTabs';
import { STRING } from '../../../utils/constant/strings';
import { styles } from './Tenant.styles';


const PaymentHistory = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <CustomHeader title={STRING.PAYMENT_HISTORY} />
                <PaymentTabs/>
            </View>

        </ScrollView>
    )
}

export default PaymentHistory