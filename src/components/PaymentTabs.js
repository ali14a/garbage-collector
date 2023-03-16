import React,{useState} from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { deviceWidth,} from '../utils/styles/responsive'
import { COLORS } from '../utils/styles/theme';
import ServiceHistory from '../screens/paymentCenter/ServiceHistory';
import RequestHistory from '../screens/paymentCenter/RequestHistory';
import { styles } from '../screens/paymentCenter/Payment.styles';



const PaymentTabs = () => {
    const FirstRoute = () => <ServiceHistory />;

    const SecondRoute = () =>  <RequestHistory />;
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title:'SERVICE PAYMENT HISTORY' },
        { key: 'second', title: 'REQUESTS PAYMENT HISTORY' },
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
                    minWidth: deviceWidth,
                    justifyContent: 'center',
                }}
                bounces={true}
            />
        );
    };

    return (
        <>
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
            initialLayout={{ width: deviceWidth }}
        />
        </>
    )
}

export default PaymentTabs;