import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { GoBack } from '../../../components';
import { STRING } from '../../../utils/constant/strings';
import { margin } from '../../../utils/styles/globalStyle';
import { styles } from './Recorded.styles';


const ReceivedPayment = () => {
    const data = [
        { key: 'Type', title: 'Monthly service payment' },
        { key: 'Date', title: '27 Jan 2021 | 04:01pm' },
        { key: 'To', title: 'Supervisor Manoj' },
        { key: 'Payment ID', title: 'SKCB97923' },
        { key: 'Amount', title: '₹40' },
    ]
    const navigation = useNavigation();
    return (

        <View style={styles.container}>
            <View style={styles.centeredView}>
                    <View style={styles.backContainer}>
                        <GoBack />
                    </View>
                    <Text style={styles.recordedText}>{STRING.RECORDED_PAYMENT}</Text>
                    <View style={{ marginTop: margin.extraLarge }}>
                        {
                            data.map((e, i) => {
                                return (
                                    <View style={styles.paymentDetailContainer}>
                                        <View style={{ flex: 1, marginBottom: margin.generic }}>
                                            <Text style={styles.typeText_1}>{e.key}</Text>
                                        </View>
                                        <View style={{ flex: 2, marginBottom: margin.generic }}>
                                            <Text style={styles.typeText_2}>{e.title}</Text>
                                        </View>
                                    </View>
                                )

                            })
                        }
                    </View>
                    <Pressable style={styles.okayButton} onPress = {() => navigation.navigate('Payment')}>
                        <Text style={styles.okayText}>{STRING.OKAY}</Text>
                    </Pressable>
                </View>
        </View>
    )

}
export default ReceivedPayment;




