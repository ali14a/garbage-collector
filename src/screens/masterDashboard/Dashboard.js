import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {AddressSelect, CustomHeader} from '../../components';
import {STRING} from '../../utils/constant/strings';
import Graphs from '../home/graphs/Graphs';
import {styles} from './Dashboard.styles';

const Dashboard = props => {
  const {serviceHistory} = props;
  const navigation = useNavigation();
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
  const [monthlyData, setMonthlyData] = useState([]);
  const months = [
    moment().format('MMMM YYYY'),
    moment().subtract(1, 'M').format('MMMM YYYY'),
    moment().subtract(2, 'M').format('MMMM YYYY'),
  ];
  useEffect(() => {
    setMonthlyData(
      months.map((month, index) => {
        return {
          id: index,
          month: month,
          data: serviceHistory.filter(
            item => month === moment(item.date).format('MMMM YYYY'),
          ),
        };
      }),
    );
  }, [serviceHistory]);
  const monthHistoryClickhandler = monthData => {
    navigation.navigate('Month Log', {
      monthData: monthData,
    });
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <CustomHeader title={STRING.MASTER_DASHBOARD} showBackBtn={false} />
        <AddressSelect address={address} />
        <View style={styles.graphContainer}>
          <Graphs />
        </View>
        <View style={{}}>
          <Text style={styles.subHeadingText}>{STRING.MONTHLY_HISTORY}</Text>
          {monthlyData.map(month => (
            <Pressable
              key={month.id}
              style={styles.monthContainer}
              onPress={() => monthHistoryClickhandler(month)}>
              <MaterialCommunityIcon
                name={'calendar-check-outline'}
                style={styles.calendarCheckIcon}
              />
              <View style={styles.monthTextContainer}>
                <Text style={styles.monthText}>
                  {moment(month.month).format('MMMM YYYY')}
                </Text>
                <Text style={styles.subText}>
                  {STRING.VIEW_MONTHLY_PERFORMANCE}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => {
  return {
    serviceHistory: state.home.serviceHistory,
  };
};

const wrappedDashboard = connect(mapStateToProps, null)(Dashboard);

export default wrappedDashboard;
