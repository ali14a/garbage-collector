import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { styles } from './Payment.styles';
import { CustomHeader } from '../../components';
import { STRING } from '../../utils/constant/strings';
import { IMAGE } from '../../utils/constant/images';
import { margin, row } from '../../utils/styles/globalStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../utils/styles/theme';
import { hp } from '../../utils/styles/responsive';

const PaymentMethods = () => {
    return (
        <View style={[styles.container, { marginTop: 0 }]}>
            <CustomHeader title={STRING.PAYMENT_METHODS} />
            <View style={styles.amountContainer}>
                <Text style={styles.payableAmount}>{STRING.TOTAL_PAYABLE_AMOUNT}{":"}{" "}{'₹'}{'50'}</Text>
                <View style={{ ...row, alignItems: 'center' }}>
                    <Text style={styles.credit}>{STRING.CARBON_CREDIT_USING} {":"}{" "}{'20/50'}</Text>
                    <Image source={IMAGE.carbonCredit} style={{ marginLeft: margin.tiny, marginBottom: margin.tiny }} />
                </View>

            </View>
            <Pressable style={styles.onlineContainer}>
                <Ionicons name="card" style={[styles.editIcon, { color: COLORS.ORANGE1 }]} />
                <View style={styles.paidContainer}>
                    <Text style={styles.monthText}>{STRING.PAY}{" "}{STRING.ONLINE}</Text>
                    <Text style={styles.paidText}>{STRING.PAY}{" "}{'₹'}{'50'}{" "}{STRING.ONLINE}</Text>
                </View>
                    <FontAwesome name="angle-right"  size={hp(36)} color= {COLORS.C2} style={{marginRight:margin.generic}}/>
            </Pressable>

        </View>
    )
}

export default PaymentMethods;