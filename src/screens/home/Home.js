import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {AddressSelect, CarbonCredits} from '../../components';
import {getuser} from '../../redux/HomeComponent/HomeActions';
import {STRING} from '../../utils/constant/strings';
import {margin, mediumText} from '../../utils/styles/globalStyle';
import CalendarComponent from './CalendarComponent';
import ETA from './ETA';
import Graphs from './graphs/Graphs';
import {styles} from './Home.styles';

const Home = props => {
  const {user, get_user} = props;

  useEffect(() => {
    // get_user();
  }, []);
  const navigation = useNavigation();
  const eta = '11 minutes';
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.profileContainer}>
        <Text style={[mediumText, styles.greetText]}>
          {`${STRING.HEY} ${'Kartik'},`}
        </Text>
        <View style={styles.addressContainer}>
          <AddressSelect />
          <Pressable onPress={() => navigation.navigate('Carbon Wallet')}>
            <CarbonCredits />
          </Pressable>
        </View>
      </View>
      <Pressable onPress={() => navigation.navigate('Track Collector')}>
        <ETA eta={eta} />
      </Pressable>
      <View
        style={{
          marginHorizontal: margin.generic,
          marginBottom: margin.extraLarge,
        }}>
        <CalendarComponent showMonth={true} />
        <Graphs />
      </View>
    </ScrollView>
  );
};
//export default Home;

const wrappedHomeScreen = connect(
  store => {
    const {home, login} = store;
    const {user, getuser, get_user} = home;
    return {
      success: login.success,
      isNewUser: login.isNewUser,
      pending: getuser.pending,
      loggedInUser: login.loggedInUser,
      user: user,
      get_user,
    };
  },
  dispatch => {
    return {
      reset_loginSuccess: () => dispatch(resetLoginSuccess()),
      get_user: () => dispatch(getuser()),
    };
  },
)(Home);
export default wrappedHomeScreen;
