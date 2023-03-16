import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {CustomHeader} from '../../components';
import {STRING} from '../../utils/constant/strings';
import {row, spaceEvenly} from '../../utils/styles/globalStyle';
import {wp} from '../../utils/styles/responsive';
import {CalendarComponent} from '../home';
import {styles} from './Dashboard.styles';
const MonthLog = props => {
  const {monthData} = props.route.params;
  const [wasteProduced, setWasteProduced] = useState([]);
  const [segStats, setSegStats] = useState([]);
  useEffect(() => {
    let wet = 0;
    let dry = 0;
    let hazard = 0;
    let total = 0;
    let mixed = 0;
    monthData.data.forEach(element => {
      if (element.is_mixed) {
        mixed = element.mixed_weight;
      } else {
        wet = element.green_bin_weight + wet;
        dry = element.blue_bin_weight + dry;
        hazard = element.red_bin_weight + hazard;
      }
      // total = wet + dry + hazard;
    });
    total = wet + dry + hazard + mixed;
    setWasteProduced([
      {id: 0, type: 'Wet', value: parseFloat(wet.toFixed(2))},
      {id: 1, type: 'Dry', value: parseFloat(dry.toFixed(2))},
      {id: 2, type: 'Hazard', value: parseFloat(hazard.toFixed(2))},
      {
        id: 3,
        type: 'Total waste produced',
        value: parseFloat(total.toFixed(2)),
      },
    ]);
    setSegStats([
      {
        id: 0,
        type: 'Segregation',
        value: parseFloat((total - mixed).toFixed(2)),
      },
      {id: 1, type: 'Carbon Saved', value: 621},
    ]);
  }, [monthData]);

  const getWasteColor = type => {
    switch (type) {
      case 'Wet':
        return styles.wet;
      case 'Dry':
        return styles.dry;
      case 'Hazard':
        return styles.hazard;
      default:
        return;
    }
  };
  const HeadingText = ({text}) => (
    <Text style={styles.subHeadingText}>{text}</Text>
  );
  return (
    <ScrollView
      contentContainerStyle={styles.monthLogContainer}
      showsVerticalScrollIndicator={false}>
      <CustomHeader title={moment(monthData.month).format('MMMM YYYY')} />
      <HeadingText text={STRING.WASTE_PRODUCED} />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.isArray(wasteProduced) &&
          wasteProduced.map(waste => (
            <View key={waste.id} style={styles.fieldContainer}>
              <Text style={styles.subHeadingText}>{waste.type}</Text>
              <Text style={[styles.valueText, getWasteColor(waste.type)]}>
                {waste.value} {'Kg'}
              </Text>
            </View>
          ))}
      </ScrollView>

      <HeadingText text={STRING.SEGREGATION_STATISTICS} />
      <View style={[row, spaceEvenly]}>
        {Array.isArray(segStats) &&
          segStats.map(stat => (
            <View
              key={stat.id}
              style={[styles.fieldContainer, {width: wp(180)}]}>
              <Text style={styles.subHeadingText}>{stat.type}</Text>
              <Text style={styles.valueText}>
                {stat.value} {'Kg'}
              </Text>
            </View>
          ))}
      </View>
      <HeadingText text={STRING.DAILY_LOG} />
      <CalendarComponent
        hideArrows={true}
        current={moment(monthData.month).format('YYYY-MM-DD')}
      />
    </ScrollView>
  );
};

export default MonthLog;
