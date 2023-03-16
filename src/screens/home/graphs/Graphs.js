import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {
  margin,
  mediumText,
  padding,
  sizes,
} from '../../../utils/styles/globalStyle';
import {hp, wp} from '../../../utils/styles/responsive';
import {COLORS} from '../../../utils/styles/theme';
import {styles} from './Graphs.styles';

const data1 = [
  {
    data: [50, 60, 70, 80, 4, 24, 85, 91, 35, 53, 53, 24, 50, 20, 80],
    svg: {stroke: 'green'},
  },
];

const Categories = [
  {Id: 'first', status: 'Total Waste'},
  {Id: 'second', status: 'Segregation'},
  {Id: 'third', status: 'Carbon Saving'},
];

const data = [
  {
    chart: [50, 60, 70, 80, 4, 24, 85, 91, 35, 53, 53, 24, 50, 20, 80],
    per: '86.3 %',
    day: '24 of 29 day',
    status: 'Total Waste',
  },
  {
    per: '76.3 %',
    day: '22 of 29 day',
    chart: [10, 20, 30, 40, 50, 24, 85, 91, 35, 53, 53, 24, 50, 20, 80],
    status: 'Segregation',
  },
  {
    per: '56.3 %',
    day: '19 of 29 day',
    chart: [0, 5, 10, 80, 4, 24, 50, 91, 35, 53, 0, 24, 50, 20, 80],
    status: 'Carbon Saving',
  },
];

const Graphs = (props) => {
  const [status, setStatus] = useState('Segregation');
  const [graphList, setGraphList] = useState(data);
  const setGraphFilter = status => {
    if (status != 'Segregation') {
      setGraphList(...data.filter(e => e.status === status));
    } else {
      setGraphList(data);
    }
    setStatus(status);
  };

  return (
    <View style={styles.graphsContainer}>
      {/* <View style={styles.valueContainer}>
        <Text style={[mediumText, styles.percText]}>86.3 %</Text>
        <Text style={[mediumText, styles.daysText]}> 24 od 29 day</Text>
      </View> */}
      <View>
        <LineChart
          data={{
            // labels: ["January", "February", "March", "April", "May", "June"],
            labels: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            ],
            datasets: [
              {
                data: [100, 20, 30, 50, 60, 6, 100, 20, 30, 50, 60, 6, 100],
              },
            ],
          }}
          withHorizontalLabels={true}
          withVerticalLabels={true}
          width={wp(375)} // from react-native
          height={hp(255)}
          //   segments={2}
          withInnerLines={false}
          withDots={false}
          withShadow={false}
          withScrollableDot={true}
          yLabelsOffset={10}
          bezier
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: COLORS.WHITE,
            backgroundGradientFrom: COLORS.WHITE,
            backgroundGradientTo: COLORS.WHITE,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => COLORS.GREEN1,
            labelColor: (opacity = 1) => '#A0A0A0',
            linejoinType: 'round',
            scrollableDotFill: '#fff',
            scrollableDotRadius: wp(6),
            scrollableDotStrokeColor: COLORS.GREEN1,
            scrollableDotStrokeWidth: wp(4),
            scrollableInfoViewStyle: {
              justifyContent: 'center',
              alignContent: 'center',
              backgroundColor: COLORS.DULL_GREY,
              borderRadius: 2,
              height: hp(73),
              //width: wp(132),
            },
            scrollableInfoTextStyle: {
              ...mediumText,
              color: COLORS.PRIMARY,
              fontSize: sizes.h5,
              fontWeight: '400',
              textAlign: 'center',
            },
            scrollableInfoSize: {width: 65, height: 40},

            scrollableInfoOffset: 15,
          }}
          style={{
            marginTop: margin.big,
            alignSelf: 'center',
          }}
        />
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{flexDirection: 'row', flex: 1, marginLeft: margin.generic}}>
          {Categories.map(e => {
            return (
              <TouchableOpacity
                style={{
                  paddingTop: padding.large,
                  marginRight: padding.extraLarge,
                }}
                onPress={() => setGraphFilter(e.status)}>
                <Text
                  style={[
                    mediumText,
                    styles.textTab,
                    status === e.status && styles.textTabActive,
                  ]}>
                  {e.status}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Graphs;
