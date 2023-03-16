import React, { useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { margin, padding } from '../../utils/styles/globalStyle';
import { styles } from './Payment.styles';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const ServiceHistory = () => {
    const navigation =useNavigation();
    const [isSelected, setIsSelected] = useState(false)
    const [selectedItem, setSelectedItem] = useState(0)
    const paymentData = [
        {
            month: 'March',
            year: '2021',
            paidStatus: 'unpaid',
        },
        {
            month: 'Feb',
            year: '2021',
            paidStatus: 'paid',

        },
        {
            month: 'Jan',
            year: '2021',
            paidStatus: 'paid',

        },
        {
            month: 'Dec',
            year: '2021',
            paidStatus: 'paid',

        },
        {
            month: 'Nov',
            year: '2021',
            paidStatus: 'paid',

        },
        {
            month: 'Oct',
            year: '2021',
            paidStatus: 'unpaid',

        },

    ]
    const setFilterStatus = (item, index) => {
        setSelectedItem(index),
            setIsSelected(true)
    }
    const _renderItem = ({ item, index }) => {
        return (
            <Pressable key={index} style={[styles.monthContainer, selectedItem === index && styles.monthActiveContainer]}
                onPress={() => setFilterStatus(item, index)}>
                <View style={styles.iconContainer}>
                    <Feather name="edit" style={[styles.editIcon, selectedItem === index && styles.editActiveIcon]} />
                </View>
                <View style={styles.paidContainer}>
                    <Text style={styles.monthText}>{item.month}{" "}{item.year} </Text>

                    <Text style={[styles.paidText, selectedItem === index && styles.paidActiveText]}>{item.paidStatus}</Text>
                </View>
                {
                    selectedItem === index ? null :
                        <Pressable style={styles.iconContainer} onPress={() => navigation.navigate('ReceivedPayment')}>
                            <MaterialIcons name="error-outline" style={styles.editIcon} />
                        </Pressable>
                }

            </Pressable>
        )
    }
    return (
        <View style={{ flex: 1, paddingHorizontal: padding.generic }}>
            <FlatList
                data={paymentData}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ marginTop: margin.generic }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={_renderItem}
            />

        </View>

    )

}

export default ServiceHistory;