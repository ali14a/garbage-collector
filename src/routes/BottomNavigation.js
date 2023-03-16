import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, Platform} from 'react-native';
import Home from '../screens/home/Home';
import Dashboard from '../screens/masterDashboard/Dashboard';
import Payment from '../screens/paymentCenter/Payment';
import {Profile} from '../screens/profile';
import {RequestComplaint} from '../screens/RequestComplaint';
import {IMAGE} from '../utils/constant/images';
import {borderRadius} from '../utils/styles/globalStyle';
import {hp, wp} from '../utils/styles/responsive';
import {COLORS} from '../utils/styles/theme';

const Tab = createBottomTabNavigator();

const BottomNavigation = props => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'home') {
            iconName = focused ? IMAGE.home_2 : IMAGE.home;

            return (
              <Image
                source={iconName}
                style={{height: hp(32), width: wp(32)}}
              />
            );
          } else if (route.name === 'MasterDashboard') {
            iconName = focused ? IMAGE.menu_2 : IMAGE.menu;
            return (
              <Image
                source={iconName}
                style={{height: hp(32), width: wp(32)}}
              />
            );
          } else if (route.name === 'Payment') {
            iconName = focused ? IMAGE.wallet_2 : IMAGE.wallet;
            return (
              <Image
                source={iconName}
                style={{height: hp(32), width: wp(32)}}
              />
            );
          } else if (route.name === 'Request Complaint') {
            iconName = focused ? IMAGE.request_2 : IMAGE.request;
            return (
              <Image
                source={iconName}
                style={{height: hp(32), width: wp(32)}}
              />
            );
          } else if (route.name === 'Profile') {
            iconName = focused ? IMAGE.avatar_2 : IMAGE.avatar;
            return (
              <Image
                source={iconName}
                style={{height: hp(32), width: wp(32)}}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: COLORS.PRIMARY,
        showLabel: false,
        tabStyle: {
          backgroundColor: COLORS.BACKGROUND,
        },
        keyboardHidesTabBar: true,
        style: {
          height: Platform.OS === 'ios' ? hp(100) : hp(80),
          borderTopLeftRadius: borderRadius.big + borderRadius.tiny * 2,
          borderTopRightRadius: borderRadius.big + borderRadius.tiny * 2,
          elevation: 8,
          shadowColor: 'rgba(33, 104, 0, 0.05)',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.2,
          shadowRadius: 5,
        },
      }}>
      <Tab.Screen name={'home'} component={Home} />
      <Tab.Screen name={'MasterDashboard'} component={Dashboard} />
      <Tab.Screen name={'Payment'} component={Payment} />
      <Tab.Screen name={'Request Complaint'} component={RequestComplaint} />
      <Tab.Screen name={'Profile'} component={Profile} />
    </Tab.Navigator>
  );
};
export default BottomNavigation;
