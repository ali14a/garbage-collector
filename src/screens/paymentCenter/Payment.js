import React, { useState} from 'react';
import { View, Text, Pressable, TextInput,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { STRING } from '../../utils/constant/strings';
import { styles } from './Payment.styles';
import { AddressSelect,} from '../../components';
import PaymentTabs from '../../components/PaymentTabs';
import { IMAGE } from '../../utils/constant/images';
import { hp, wp } from '../../utils/styles/responsive';

const Payment = () => {
    const navigation = useNavigation();
    const [amount, setAmount] = useState('')
    const [count ,setCount] = useState(0)
    
    const address = [
        {
            id: 0,
            title: 'Hno. 123, Ground floor',
            house: 123,
            floor: 'Ground Floor',
            locality: 'Jankipuram',
            selected: true,
        },
        {
            id: 1,
            title: 'Rathore Nivas',
            house: 278,
            floor: 'Kula Road',
            locality: 'Jankipuram',
            selected: false,
        },
        {
            id: 2,
            house: 123,
            title: 'H.no 222',
            floor: 'Ground Floor',
            locality: 'Jankipuram',
            selected: false,
        },
    ];
  
    const handleIncrement =() =>{
        setCount(count +1)

    }

    const handleDecrement =() =>{
        setCount(count -1) 
    }
    
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.headerText}>{STRING.PAYMENT_CENTER}</Text>
                <View style={styles.addressContainer}>
                    <AddressSelect address={address} />
                    <Text style={styles.dueText}>Total Due: ₹400 </Text>
                </View>
                <TextInput
                    placeholder={STRING.ENTER_MONTHS_TO_PAY}
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={amount => setAmount(amount)}
                    style={styles.inputText}
                />
                <View style={styles.paymentContainer}>
                    <View style={styles.incrementContainer}>
                        <Pressable onPress={() => handleDecrement()}>
                            <Image source={IMAGE.minus} style={{width:wp(24),height:hp(24)}}/>
                        </Pressable>
                        <Text style={styles.countNum}>{count}</Text>
                        <Pressable onPress={() => handleIncrement()}>
                            <Image source={IMAGE.plus} style={{width:wp(24),height:hp(24)}}/>
                        </Pressable>
                    </View>
                    <Pressable style={styles.payButton} onPress={() => navigation.navigate('Payment Methods')}>
                        <Text style={styles.payText}>{STRING.PROCEED_TO_PAY}</Text>
                        <Text style={styles.payText}>{" "}{'₹'}{amount}</Text>
                    </Pressable>
                </View>
            </View>
           <PaymentTabs/>
        </>

    )

}
export default Payment;