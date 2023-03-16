import moment from 'moment';
import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {View as AnimatableView} from 'react-native-animatable';
import {Calendar} from 'react-native-calendars';
import Entypo from 'react-native-vector-icons/Entypo';
import {BottomModal, CustomHeader} from '../../components';
import {STRING} from '../../utils/constant/strings';
import {sizes} from '../../utils/styles/globalStyle';
import {COLORS} from '../../utils/styles/theme';
import DailyLogs from './DailyLogs';
import {styles} from './Home.styles';

const DailyGarbageLog = props => {
  const {selectedDate, markedDay, data} = props.route.params;
  const selectedYear = moment(selectedDate).format('YYYY');
  const [selectedMonth, setSelectedMonth] = useState(
    moment(selectedDate).format('MMMM'),
  );
  const [seggregatedData, setSegrregtedData] = useState([]);
  const [missedData, setMissedData] = useState([]);
  const [mixedData, setMixedData] = useState([]);
  const [absentData, setAbsentData] = useState([]);
  const [filterBy, setFilterBy] = useState('none');
  const [listDataByFilter, setListDataByFilter] = useState(data);
  const [monthlyData, setMonthlyData] = useState([]);
  const [disableArrowLeft, setDisableArrowLeft] = useState(false);
  const [disableArrowRight, setDisableArrowRight] = useState(false);
  const buildingDate = '2021-05-11T08:51:38.000Z';
  const now = moment().format('MMMM');
  const past = moment().subtract(90, 'd').format('MMMM');
  let startDate = buildingDate;
  let daysDiff = moment
    .duration(moment(buildingDate, 'YYYY-MM-DD').diff(past))
    .asDays();
  if (daysDiff < 0) {
    startDate = past.toISOString();
  }
  useEffect(() => {
    setMonthlyData(
      data.filter(item => moment(item.date).format('MMMM') === selectedMonth),
    );
    selectedMonth === now
      ? !disableArrowRight && setDisableArrowRight(true)
      : disableArrowRight && setDisableArrowRight(false);
    selectedMonth === moment(startDate).format('MMMM')
      ? !disableArrowLeft && setDisableArrowLeft(true)
      : disableArrowLeft && setDisableArrowLeft(false);
  }, [selectedMonth]);
  useEffect(() => {
    let missed = [];
    let mixed = [];
    let seggregated = [];
    let absent = [];
    monthlyData.forEach(element => {
      if (element.service_provided) {
        if (element.is_mixed) {
          mixed.push(element);
        } else {
          seggregated.push(element);
        }
      } else {
        if (element.reason_for_no_service === 'OWNER_NOT_PRESENT') {
          missed.push(element);
        } else if (element.reason_for_no_service === 'TRUCK_NOT_PRESENT') {
          absent.push(element);
        }
      }
    });
    setAbsentData(absent);
    setMissedData(missed);
    setMixedData(mixed);
    setSegrregtedData(seggregated);
  }, [monthlyData]);
  const refRBSheet = useRef(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [modalData, setModalData] = useState([
    {id: 0, title: 'Total waste collected', selected: true},
    {id: 1, title: 'Only Dry waste', selected: false},
    {id: 2, title: 'Only Wet waste', selected: false},
    {id: 3, title: 'Only Hazardous waste', selected: false},
  ]);
  const onSelectModalOptions = id => {
    const updatedModalData = modalData.map(data =>
      data.id === id ? {...data, selected: true} : {...data, selected: false},
    );
    setModalData(updatedModalData);
    refRBSheet.current.close();
  };
  const menuClickHandler = () => {
    refRBSheet.current.open();
  };
  const toggleCalendar = () => {
    setShowCalendar(prevState => !prevState);
  };
  const filterByCountHandler = type => {
    switch (type) {
      case 'seggregated':
        filterBy === 'seggregated'
          ? setFilterBy('none')
          : (setFilterBy('seggregated'), setListDataByFilter(seggregatedData));
        break;
      case 'mixed':
        filterBy === 'mixed'
          ? setFilterBy('none')
          : (setFilterBy('mixed'), setListDataByFilter(mixedData));
        break;
      case 'missed':
        filterBy === 'missed'
          ? setFilterBy('none')
          : (setFilterBy('missed'), setListDataByFilter(missedData));
        break;
      case 'absent':
        filterBy === 'absent'
          ? setFilterBy('none')
          : (setFilterBy('absent'), setListDataByFilter(absentData));
        break;
      default:
        setListDataByFilter(monthlyData);
        break;
    }
  };
  const FilterByCount = ({count, type}) => {
    const getColor = type => {
      switch (type) {
        case 'seggregated':
          return COLORS.DRY;
        case 'mixed':
          return COLORS.MIXED_ORANGE;
        case 'missed':
          return COLORS.MISSED_YELLOW;
        case 'absent':
          return COLORS.HAZARD;
        default:
          return COLORS.PRIMARY;
      }
    };
    return (
      <TouchableOpacity
        onPress={() => filterByCountHandler(type)}
        style={
          type === 'seggregated'
            ? styles.countView
            : [
                styles.countView,
                {marginLeft: 8, backgroundColor: getColor(type)},
              ]
        }>
        <Text style={styles.headerText_3}>{count}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.Container}>
      <View style={styles.garbageContainer}>
        <CustomHeader
          title={STRING.DAILY_GARBAGE_LOG}
          HeaderRight={() => (
            <Pressable onPress={menuClickHandler}>
              <Entypo
                name="dots-three-vertical"
                color={COLORS.PRIMARY}
                size={sizes.h4}
              />
            </Pressable>
          )}
        />
        <BottomModal
          refRBSheet={refRBSheet}
          data={modalData}
          height={400}
          heading={STRING.CUSTOMIZE_SEG_CARD_VIEW}
          onSelectModalOptions={onSelectModalOptions}
        />
        <View style={styles.calendarView}>
          <Pressable
            onPress={toggleCalendar}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.headerText_2}>
              {selectedMonth} {selectedYear}
            </Text>
            <Entypo
              name="chevron-down"
              style={{fontSize: 23, color: COLORS.PRIMARY, marginLeft: 18}}
            />
          </Pressable>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FilterByCount
              count={seggregatedData.length}
              type={'seggregated'}
            />
            <FilterByCount count={mixedData.length} type={'mixed'} />
            <FilterByCount count={missedData.length} type={'missed'} />
            <FilterByCount count={absentData.length} type={'absent'} />
          </View>
        </View>
      </View>
      {showCalendar && (
        <AnimatableView
          // animation={showCalendar ? 'slideInDown' : 'slideInUp'}
          style={{
            backgroundColor: COLORS.WHITE,
          }}>
          <Calendar
            // disableMonthChange
            // hideArrows
            theme={{
              textSectionTitleColor: COLORS.PRIMARY,
              textSectionTitleDisabledColor: COLORS.PRIMARY,
              arrowColor: COLORS.PRIMARY,
              monthTextColor: COLORS.PRIMARY,
              textMonthFontWeight: '500',
              textDayHeaderFontWeight: '400',
              textDayFontSize: sizes.h7,
              textMonthFontSize: sizes.h5,
              textDayHeaderFontSize: sizes.h6,
              todayTextColor: COLORS.GREEN1,
            }}
            // enableSwipeMonths={!disableArrowRight && !disableArrowLeft}
            current={moment(selectedDate).format('YYYY-MM-DD')}
            disableArrowLeft={disableArrowLeft}
            disableArrowRight={disableArrowRight}
            markingType={'period'}
            onDayPress={() => setShowCalendar(false)}
            onMonthChange={month => {
              // console.log('month changed', month);
              setSelectedMonth(moment(month.timestamp).format('MMMM'));
            }}
            markedDates={markedDay}
          />
        </AnimatableView>
      )}
      <View style={styles.logsContainer}>
        <FlatList
          data={filterBy === 'none' ? monthlyData : listDataByFilter}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => {
            return <DailyLogs data={item} modalData={modalData} />;
          }}
        />
      </View>
    </View>
  );
};

export default DailyGarbageLog;
