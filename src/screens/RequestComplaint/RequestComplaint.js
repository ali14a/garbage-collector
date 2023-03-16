import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {CustomHeader} from '../../components';
import {STRING} from '../../utils/constant/strings';
import {padding, sizes} from '../../utils/styles/globalStyle';
import {deviceWidth, hp} from '../../utils/styles/responsive';
import {COLORS} from '../../utils/styles/theme';
import Complaints from './Complaints';
import Phonebook from './Phonebook';
import Requests from './Requests';

const RequestComplaint = () => {
  const FirstRoute = () => <Complaints />;
  const SecondRoute = () => <Requests />;
  const ThirdRoute = () => <Phonebook />;
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: STRING.COMPLAINTS},
    {key: 'second', title: STRING.REQUESTS},
    {key: 'third', title: STRING.PHONEBOOK},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });
  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        activeColor={COLORS.PRIMARY}
        inactiveColor={COLORS.C5}
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
        labelStyle={styles.label}
        tabStyle={styles.tabStyle}
        bounces={true}
      />
    );
  };
  return (
    <>
      <View style={styles.container}>
        <CustomHeader title={STRING.REQUESTS_COMPLAINTS} showBackBtn={false} />
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </>
  );
};

export default RequestComplaint;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: padding.generic,
    paddingTop: hp(40),
  },
  scene: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: COLORS.F2,
  },
  indicator: {
    backgroundColor: COLORS.PRIMARY,
    height: hp(4),
  },
  label: {
    fontWeight: 'bold',
    fontSize: sizes.h7,
  },
  tabStyle: {
    width: deviceWidth / 3,
  },
});
