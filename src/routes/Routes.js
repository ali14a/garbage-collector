import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Login, OTP} from '../screens/auth';
import {CarbonWallet} from '../screens/home/carbonwallet';
import DailyGarbageLog from '../screens/home/DailyGarbageLog';
import TrackCollector from '../screens/home/trackcollector/TrackCollector';
import {MonthLog} from '../screens/masterDashboard';
import PaymentMethods from '../screens/paymentCenter/PaymentMethods';
import ReceivedPayment from '../screens/paymentCenter/recordedPayment/ReceivedPayment';
import {
  Dashboard,
  EditProfile,
  EditSpoc,
  OwnerBuilding,
  PaymentHistory,
  PropertyOwner,
  Spoc,
  TenantBuilding,
  TenantProfile,
} from '../screens/profile';
import ChangePassword from '../screens/profile/EditProfile/ChangePassword';
import {ChooseLocation, Contacts, PastReqComplaint} from '../screens/RequestComplaint';
import BottomNavigation from './BottomNavigation';

const Stack = createStackNavigator();

const NavigationRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Home" component={BottomNavigation} />
        <Stack.Screen name="Carbon Wallet" component={CarbonWallet} />
        <Stack.Screen name="DailyGarbageLog" component={DailyGarbageLog} />
        <Stack.Screen name="Month Log" component={MonthLog} />
        <Stack.Screen name="ReceivedPayment" component={ReceivedPayment} />
        <Stack.Screen name="Payment Methods" component={PaymentMethods} />
        <Stack.Screen name="Track Collector" component={TrackCollector} />
        <Stack.Screen
          name="Past RequestComplaint"
          component={PastReqComplaint}
        />
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Edit Profile" component={EditProfile} />
        <Stack.Screen name="Change Password" component={ChangePassword} />
        <Stack.Screen name="Tenant Building" component={TenantBuilding} />
        <Stack.Screen name="Owner Building" component={OwnerBuilding} />
        <Stack.Screen name="Property Owner" component={PropertyOwner} />
        <Stack.Screen name="Spoc" component={Spoc} />
        <Stack.Screen name="Edit Spoc" component={EditSpoc} />
        <Stack.Screen name="Tenant Dashboard" component={Dashboard} />
        <Stack.Screen name="Tenant Profile" component={TenantProfile} />
        <Stack.Screen name="Payment History" component={PaymentHistory} />
        <Stack.Screen name="Choose Location" component={ChooseLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoute;
