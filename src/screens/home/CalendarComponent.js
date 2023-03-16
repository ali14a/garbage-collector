import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {connect} from 'react-redux';
import {getServiceHistory} from '../../redux/HomeComponent/HomeActions';
import {sizes} from '../../utils/styles/globalStyle';
import {COLORS} from '../../utils/styles/theme';
import {styles} from './Home.styles';

LocaleConfig.locales.en = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  today: 'Today',
};
LocaleConfig.defaultLocale = 'en';

//selected address->building date=past if <90  ||past = 90

const CalendarComponent = props => {
  const navigation = useNavigation();
  const [calendarData, setCalendarData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(moment().format('M'));
  const [disableArrowLeft, setDisableArrowLeft] = useState(false);
  const [disableArrowRight, setDisableArrowRight] = useState(false);
  const buildingDate = '2021-05-11T08:51:38.000Z';
  const now = moment();
  let past = moment().subtract(90, 'd');
  let startDate = buildingDate;
  let daysDiff = moment
    .duration(moment(buildingDate, 'YYYY-MM-DD').diff(past))
    .asDays();
  if (daysDiff < 0) {
    startDate = past.toISOString();
  }
  const data = props.serviceHistory;
  const current = props.current || moment().format('YYYY-MM-DD');
  useEffect(() => {
    selectedMonth == now.format('M')
      ? !disableArrowRight && setDisableArrowRight(true)
      : disableArrowRight && setDisableArrowRight(false);
    console.log(selectedMonth, moment(startDate).month());
    selectedMonth == moment(startDate).format('M')
      ? !disableArrowLeft && setDisableArrowLeft(true)
      : disableArrowLeft && setDisableArrowLeft(false);
  }, [selectedMonth]);
  function enumerateDaysBetweenDates(startDate, endDate) {
    let date = [];
    let daysDiff = moment
      .duration(moment(startDate, 'YYYY-MM-DD').diff(endDate))
      .asDays();
    while (daysDiff) {
      date.push(startDate);
      startDate = moment(startDate).add(1, 'days').toISOString();
      daysDiff++;
    }
    return date;
  }
  useEffect(() => {
    props.getServiceHistory(props.userId, props.buildingId, 90);
  }, [props.buildingId]);
  useEffect(() => {
    if (data.length > 0) {
      // let endDate = startDate.setMonth(startDate.getMonth() - 3);

      let endDate = moment().startOf('day');
      let dateArr = enumerateDaysBetweenDates(startDate, endDate);
      let sortedDate = data.sort(
        (x, y) => moment(x.date).toDate() - moment(y.date).toDate(),
      );
      let tempCalendarData = [];
      let count = 0;
      dateArr.map(date => {
        try {
          if (
            moment(date).format('YYYY-MM-DD') ===
            moment(sortedDate[count].date).format('YYYY-MM-DD')
          ) {
            tempCalendarData.push(sortedDate[count]);
            count++;
          } else {
            tempCalendarData.push({
              date: date,
              service_provided: false,
              reason_for_no_service: 'TRUCK_NOT_PRESENT',
            });
          }
        } catch (e) {
          tempCalendarData.push({
            date: date,
            service_provided: false,
            reason_for_no_service: 'TRUCK_NOT_PRESENT',
          });
        }
      });
      setCalendarData(tempCalendarData);
    } else {
      props.getServiceHistory(props.userId, props.buildingId, 90);
    }
  }, [data, props.buildingId]);
  const [markedDay, setMarkedDay] = useState({});
  useEffect(() => {
    let TempMarkedDate = {};
    calendarData.map((item, index, originalArr) => {
      let type = '';
      let nextItemType = '';
      let prevItemType = '';
      let nextData = originalArr[index + 1];
      let prevData = originalArr[index - 1];
      let date = moment(item.date).format('YYYY-MM-DD');

      if (item.service_provided) {
        if (item.is_mixed) {
          type = 'mixed';
        } else {
          type = 'seggregated';
        }
      } else {
        if (item.reason_for_no_service === 'OWNER_NOT_PRESENT') {
          type = 'missed';
        } else if (item.reason_for_no_service === 'TRUCK_NOT_PRESENT') {
          type = 'absent';
        }
      }
      if (nextData) {
        if (nextData.service_provided) {
          if (nextData.is_mixed) {
            nextItemType = 'mixed';
          } else {
            nextItemType = 'seggregated';
          }
        } else {
          if (nextData.reason_for_no_service === 'OWNER_NOT_PRESENT') {
            nextItemType = 'missed';
          } else if (nextData.reason_for_no_service === 'TRUCK_NOT_PRESENT') {
            nextItemType = 'absent';
          }
        }
      } else {
        nextItemType = false;
      }
      if (prevData) {
        if (prevData.service_provided) {
          if (prevData.is_mixed) {
            prevItemType = 'mixed';
          } else {
            prevItemType = 'seggregated';
          }
        } else {
          if (prevData.reason_for_no_service === 'OWNER_NOT_PRESENT') {
            prevItemType = 'missed';
          } else if (prevData.reason_for_no_service === 'TRUCK_NOT_PRESENT') {
            prevItemType = 'absent';
          }
        }
      } else {
        prevData = false;
      }
      TempMarkedDate[date] = {
        startingDay: type === prevItemType ? false : true,
        endingDay: type === nextItemType ? false : true,
        color:
          type == 'seggregated'
            ? COLORS.GREEN1
            : type == 'mixed'
            ? COLORS.MIXED_ORANGE
            : type == 'missed'
            ? COLORS.MISSED_YELLOW
            : COLORS.HAZARD,
        textColor: COLORS.WHITE,
      };
      setMarkedDay(TempMarkedDate);
    });
  }, [calendarData]);
  return (
    <View style={styles.calenderContainer}>
      <Calendar
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
        hideArrows={props.hideArrows}
        current={current}
        markingType={'period'}
        onDayPress={date =>
          navigation.navigate('DailyGarbageLog', {
            data: calendarData,
            selectedDate: date.timestamp,
            markedDay: markedDay,
          })
        }
        onMonthChange={date => {
          setSelectedMonth(date.month);
        }}
        disableArrowLeft={disableArrowLeft}
        disableArrowRight={disableArrowRight}
        markedDates={markedDay}
      />
    </View>
  );
};
CalendarComponent.defaultProps = {
  hideArrows: false,
};
const mapStateToProps = state => {
  return {
    userId: 87,
    buildingId: state.home.selectedBuilding.id,
    serviceHistory: state.home.serviceHistory,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getServiceHistory: (userId, buildingId, days) =>
      dispatch(getServiceHistory(userId, buildingId, days)),
  };
};
const wrappedCalendarComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalendarComponent);
export default wrappedCalendarComponent;
