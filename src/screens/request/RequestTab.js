import React,{useState} from 'react';
import {View,Text,useWindowDimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './RequestTab.styles';
import { CustomHeader } from '../../components';
import { STRING } from '../../utils/constant/strings';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { deviceWidth } from '../../utils/styles/responsive'
import { COLORS } from '../../utils/styles/theme';


const RequestTab = () =>{
    const navigation = useNavigation();
    const FirstRoute = () => <View style={{flex:1}} />;

    const SecondRoute = () =>  <View style={{flex:1}} />;

    const ThirdRoute = () =>  <View style={{flex:1}} />;

    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title:'COMPLAINTS' },
        { key: 'second', title: 'REQUESTS' },
        { key: 'third', title: 'PHONEBOOK' },
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


    return(
        <View style={styles.container}>
            <CustomHeader title={STRING.REQUEST_COMPLAINTS} showBackBtn={false} />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={renderTabBar}
                initialLayout={{ width: deviceWidth }}
            />
        </View>
    )
}


export default  RequestTab ;