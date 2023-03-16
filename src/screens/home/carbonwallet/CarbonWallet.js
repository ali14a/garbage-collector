import React, {useState} from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {CarbonCredits, CustomHeader} from '../../../components';
import {STRING} from '../../../utils/constant/strings';
import {
  margin,
  mediumText,
  padding,
  row,
  sizes,
} from '../../../utils/styles/globalStyle';
import {deviceWidth, hp} from '../../../utils/styles/responsive';
import {COLORS} from '../../../utils/styles/theme';
import RedeemCC from './RedeemCC';
import RedeemHistory from './RedeemHistory';

const CarbonWallet = () => {
  const credits = 3676;
  const FirstRoute = () => <RedeemCC />;
  const SecondRoute = () => <RedeemHistory />;
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'REDEEM CARBON CREDITS'},
    {key: 'second', title: 'REDEEM HISTORY'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        scrollEnabled
        activeColor={COLORS.PRIMARY}
        inactiveColor={COLORS.C5}
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
        labelStyle={styles.label}
        tabStyle={styles.tabStyle}
        contentContainerStyle={{
          minWidth: layout.width,
          justifyContent: 'center',
        }}
        bounces={true}
      />
    );
  };
  return (
    <>
      <View style={styles.container}>
        <CustomHeader title={STRING.CARBON_WALLET} />
        <View
          style={[row, {alignItems: 'center', marginVertical: margin.large}]}>
          <Text style={[mediumText, styles.totalCCText]}>
            {`${STRING.TOTAL_CC}:  `}
          </Text>
          <CarbonCredits />
        </View>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={{width: layout.width}}
      />
    </>
  );
};

export default CarbonWallet;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: padding.generic,
    paddingTop: padding.normal,
  },
  totalCCText: {
    fontSize: sizes.h5,
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
    width: deviceWidth / 2,
  },
  credits: {
    color: COLORS.ORANGE1,
    fontSize: sizes.h5,
  },
});
