import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {
  AdditionalInfoInput,
  Card,
  Container,
  CustomButton,
  CustomCardInfo,
  DatePickerModal,
  InputContainer,
  LocationModal,
} from '../../components';
import {CalendarIcon, RightArrow} from '../../components/Icons';
import {IMAGE} from '../../utils/constant/images';
import {STRING} from '../../utils/constant/strings';
import {center, margin, paddingBottom} from '../../utils/styles/globalStyle';
import {wp} from '../../utils/styles/responsive';
import {COLORS} from '../../utils/styles/theme';
import CategoryModal from './CategoryModal';
import {styles} from './RequestComplaint.styles';
const Requests = () => {
  const [showCalendarPicker, setShowCalendarPicker] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedCategory, setSelectedCategory] = useState({
    title: STRING.CHOOSE_CATEGORY,
  });
  const [selectedLocation, setSelectedLocation] = useState('');
  const refRBSheet = useRef(null);
  const navigation = useNavigation();
  const viewPastRequest = () => {
    navigation.navigate('Past RequestComplaint', {type: 'request'});
  };
  const prevRequest = 14;
  const toggleDatePicker = () => {
    setShowCalendarPicker(prevState => !prevState);
  };
  const onDaySelect = day => {
    setSelectedDay(day.dateString);
    toggleDatePicker();
  };
  const toggleCategoryModal = () => {
    setShowCategoryModal(prevState => !prevState);
  };
  const showLocationPicker = () => {
    refRBSheet.current.open();
  };
  const onCategorySelect = (category, subCategory) => {
    setSelectedCategory({category, subCategory});
  };
  const postRequest = () => {};
  const address = [
    {
      id: 0,
      title: 'Hno. 123, Ground floor',
      house: 123,
      floor: 'Ground Floor',
      locality: 'Jankipuram',
      selected: true,
    },
    {
      id: 1,
      title: 'Rathore Nivas',
      house: 278,
      floor: 'Kula Road',
      locality: 'Jankipuram',
      selected: false,
    },
    {
      id: 2,
      house: 123,
      title: 'H.no 222',
      floor: 'Ground Floor',
      locality: 'Jankipuram',
      selected: false,
    },
  ];
  const onSelectLocation = location => {
    setSelectedLocation(location);
    refRBSheet.current.close();
  };
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card>
          <View style={{marginVertical: margin.generic}}>
            <Text style={styles.headingText}>{STRING.MAKE_REQUEST}</Text>

            <DatePickerModal
              isVisible={showCalendarPicker}
              toggleModal={toggleDatePicker}
              selectedDay={selectedDay}
              onDaySelect={onDaySelect}
            />
            <Pressable onPress={toggleDatePicker}>
              <InputContainer>
                {selectedDay ? (
                  <Text style={styles.selectedText}>{`${selectedDay}`}</Text>
                ) : (
                  <Text style={[styles.selectedText, styles.textStyle]}>
                    {STRING.CHOOSE_DATE}
                  </Text>
                )}
                <View style={center}>
                  <CalendarIcon color={COLORS.C2} size={wp(24)} />
                </View>
              </InputContainer>
            </Pressable>
            <Pressable onPress={toggleCategoryModal}>
              <InputContainer>
                {selectedCategory.subCategory ? (
                  <Text style={styles.selectedText}>
                    {`₹${selectedCategory.subCategory.price} - ${selectedCategory.category} - ${selectedCategory.subCategory.title}`}
                  </Text>
                ) : (
                  <Text style={[styles.selectedText, styles.textStyle]}>
                    {selectedCategory.title}
                  </Text>
                )}
                <View style={center}>
                  <RightArrow color={COLORS.C2} size={wp(24)} />
                </View>
              </InputContainer>
            </Pressable>
            <CategoryModal
              visible={showCategoryModal}
              toggleModal={toggleCategoryModal}
              onSelect={onCategorySelect}
            />
            <Pressable onPress={showLocationPicker}>
              <InputContainer>
                {selectedLocation ? (
                  <Text style={styles.selectedText}>
                    {`${selectedLocation.title}`}
                  </Text>
                ) : (
                  <Text style={[styles.selectedText, styles.textStyle]}>
                    {STRING.CHOOSE_LOCATION}
                  </Text>
                )}
                <View style={center}>
                  <RightArrow color={COLORS.C2} size={wp(24)} />
                </View>
              </InputContainer>
            </Pressable>
            <LocationModal
              refRBSheet={refRBSheet}
              height={360}
              data={address}
              showPicker={true}
              onPress={onSelectLocation}
            />

            <AdditionalInfoInput />
            <CustomButton
              text={STRING.POST_REQUEST}
              onPress={postRequest}
              disabled={true}
            />
          </View>
        </Card>
        <CustomCardInfo
          title={STRING.PAST_REQUEST}
          body={`${prevRequest} ${STRING.REQUEST_FOUND}`}
          onPress={viewPastRequest}
          image={IMAGE.stopwatch}
        />
        <View style={paddingBottom} />
      </ScrollView>
    </Container>
  );
};

export default Requests;
