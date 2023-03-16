import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Modal from 'react-native-modal';
import {
  borderRadius,
  margin,
  padding,
  sizes,
} from '../utils/styles/globalStyle';
import {deviceHeight, hp} from '../utils/styles/responsive';
import {COLORS} from '../utils/styles/theme';

const DatePickerModal = ({
  isVisible,
  toggleModal,
  onDaySelect,
  selectedDay,
}) => {
  const today = new Date();
  const markedDates = {
    selected: {
      startingDay: true,
      endingDay: true,
      color: COLORS.GREEN1,
      textColor: COLORS.WHITE,
    },
  };
  return (
    <Modal
      isVisible={isVisible}
      deviceHeight={deviceHeight + hp(20)}
      style={{margin: 0, padding: 0, flex: 1}}
      onSwipeComplete={toggleModal}
      swipeDirection="left"
      onBackdropPress={toggleModal}>
      <View style={styles.calendarContainer}>
        <Calendar
          markedDates={{
            [selectedDay]: {
              startingDay: true,
              endingDay: true,
              color: COLORS.PRIMARY,
              textColor: COLORS.WHITE,
            },
          }}
          minDate={today}
          style={styles.calendarContainer}
          theme={{
            // 'stylesheet.calendar.header': {
            //   week: {
            //     // marginTop: 5,
            //     flexDirection: 'row',
            //     justifyContent: 'space-between',
            //   },
            // },
            textSectionTitleColor: COLORS.PRIMARY,
            textSectionTitleDisabledColor: COLORS.PRIMARY,
            arrowColor: COLORS.PRIMARY,
            monthTextColor: COLORS.PRIMARY,
            textMonthFontWeight: '500',
            textDayHeaderFontWeight: '400',
            textDayFontSize: sizes.h7,
            textMonthFontSize: sizes.h5,
            textDayHeaderFontSize: sizes.h6,
            selectedDayBackgroundColor: COLORS.PRIMARY,
            todayTextColor: COLORS.GREEN1,
          }}
          // current={'2021-06-16'}
          // minDate={'2021-06-01'}
          // disabledDaysIndexes={[0, 6]}
          markingType={'period'}
          onDayPress={onDaySelect}
        />
      </View>
    </Modal>
  );
};

export default DatePickerModal;

const styles = StyleSheet.create({
  calendarContainer: {
    borderRadius: borderRadius.big,
    marginHorizontal: margin.big,
    paddingVertical: padding.small,
  },
});
