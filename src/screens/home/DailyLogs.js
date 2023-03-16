import moment from 'moment';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CarbonCredits} from '../../components';
import {STRING} from '../../utils/constant/strings';
import {wp} from '../../utils/styles/responsive';
import {COLORS} from '../../utils/styles/theme';
import {styles} from './Home.styles';
const DailyLogs = ({data, modalData}) => {
  const [selected, setSelected] = useState(false);
  const totalWasteWeight =
    data.blue_bin_weight + data.red_bin_weight + data.green_bin_weight;
  const time = moment(data.date).format('HH:MM');
  const day = moment(data.date).format('ddd');
  const date = moment(data.date).format('DD');
  const toggleSelect = () => {
    setSelected(prevState => !prevState);
  };
  const ShowWeight = ({text}) => (
    <>
      <Text style={[styles.missedText, {color: COLORS.GREEN1}]}>{text}</Text>
      <CarbonCredits credits={data.carbon_credit_earned} />
    </>
  );
  const renderSeggregated = element => {
    switch (element.id) {
      case 0:
        return <ShowWeight text={totalWasteWeight} key={element.id} />;
      case 1:
        return (
          <ShowWeight text={`D: ${data.green_bin_weight}`} key={element.id} />
        );
      case 2:
        return (
          <ShowWeight text={`W: ${data.blue_bin_weight}`} key={element.id} />
        );
      case 3:
        return (
          <ShowWeight text={`H ${data.red_bin_weight}`} key={element.id} />
        );
    }
    return (
      <>
        <Text style={[styles.missedText, {color: COLORS.GREEN1}]}>
          {totalWasteWeight}
        </Text>
        <CarbonCredits credits={data.carbon_credit_earned} />
      </>
    );
  };
  const Composition = ({title, data}) => (
    <View>
      <Text style={[styles.missedText, styles.compositionText]}>{title}</Text>
      <Text style={[styles.compositionText, styles.missedText]}>{data}</Text>
    </View>
  );
  const renderBox = () => {
    let type = '';
    if (data.service_provided) {
      if (data.is_mixed) {
        type = 'mixed';
      } else {
        type = 'seggregated';
      }
    } else {
      if (data.reason_for_no_service === 'OWNER_NOT_PRESENT') {
        type = 'missed';
      } else if (data.reason_for_no_service === 'TRUCK_NOT_PRESENT') {
        type = 'absent';
      }
    }
    switch (type) {
      case 'missed':
        return (
          <View
            style={[
              styles.logsListView,
              {backgroundColor: COLORS.MISSED_YELLOW},
            ]}>
            <Text style={styles.missedText}>{STRING.USER_MISSED}</Text>
            <Text style={[styles.missedText, styles.compositionText]}>
              {time}
            </Text>
          </View>
        );
      case 'absent':
        return (
          <View style={[styles.logsListView, {backgroundColor: COLORS.HAZARD}]}>
            <Text style={styles.missedText}>{STRING.PICKER_ABSENT}</Text>
          </View>
        );
      case 'mixed':
        return (
          <TouchableOpacity onPress={toggleSelect}>
            <View
              style={[
                styles.logsListView,
                {backgroundColor: COLORS.MIXED_ORANGE},
              ]}>
              {selected ? (
                <>
                  <View>
                    <Text style={[styles.missedText, styles.compositionText]}>
                      {STRING.MIXED_WASTE}
                    </Text>
                    <Text style={styles.missedText}>{totalWasteWeight}</Text>
                  </View>
                  <Text style={[styles.missedText, styles.compositionText]}>
                    {time}
                  </Text>
                </>
              ) : (
                <>
                  <Text style={styles.missedText}>{totalWasteWeight}</Text>
                  <CarbonCredits credits={data.credit} color={COLORS.WHITE} />
                </>
              )}
            </View>
          </TouchableOpacity>
        );
      case 'seggregated':
        return (
          <TouchableOpacity
            style={[
              styles.logsListView,
              {
                backgroundColor: selected ? COLORS.GREEN1 : COLORS.WHITE,
                borderColor: COLORS.GREEN1,
                borderWidth: 1.5,
              },
            ]}
            onPress={toggleSelect}>
            {selected ? (
              <>
                <View style={styles.compositionContainer}>
                  <Composition
                    title={STRING.DRY}
                    data={data.green_bin_weight}
                  />
                  <Composition title={STRING.WET} data={data.blue_bin_weight} />
                  <Composition
                    title={STRING.HARZARDOUS}
                    data={data.red_bin_weight}
                  />
                </View>
                <Text style={[styles.missedText, styles.compositionText]}>
                  {time}
                </Text>
              </>
            ) : (
              <>
                {modalData.map(
                  element => element.selected && renderSeggregated(element),
                )}
              </>
            )}
          </TouchableOpacity>
        );
    }
  };

  return (
    <View style={styles.subLogContainer}>
      <View style={{width: wp(44)}}>
        <Text>{date}</Text>
        <Text>{day}</Text>
      </View>
      <View style={{flex: 1}}>{renderBox()}</View>
    </View>
  );
};

export default DailyLogs;
