import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  AdditionalInfoInput,
  Card,
  Container,
  CustomButton,
  CustomCardInfo,
  InputContainer,
} from '../../components';
import {LocationIcon} from '../../components/Icons';
import {IMAGE} from '../../utils/constant/images';
import {STRING} from '../../utils/constant/strings';
import {margin, paddingBottom} from '../../utils/styles/globalStyle';
import {COLORS} from '../../utils/styles/theme';
import {styles} from './RequestComplaint.styles';

const Complaints = () => {
  const prevRequest = 14;
  const navigation = useNavigation();
  const viewPastComplaints = () => {
    navigation.navigate('Past RequestComplaint', {type: 'complaint'});
  };
  const [openCategory, setOpenCategory] = useState(false);
  const [categoryValue, setCategoryValue] = useState(null);
  const [category, setCategory] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const [openSubCategory, setOpenSubCategory] = useState(false);
  const [subCategoryValue, setSubCategoryValue] = useState(null);
  const [subCategory, setSubCategory] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const postCompaint = () => {};
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card>
          <View style={{marginVertical: margin.generic}}>
            <Text style={styles.headingText}>{STRING.POST_A_COMPLAINT}</Text>
            <DropDownPicker
              style={styles.dropdown}
              textStyle={styles.textStyle}
              dropDownContainerStyle={styles.dropdown}
              placeholder={STRING.CHOOSE_CATEGORY}
              arrowIconStyle={styles.arrowIconStyle}
              placeholderStyle={styles.placeholder}
              open={openCategory}
              value={categoryValue}
              items={category}
              setOpen={setOpenCategory}
              setValue={setCategoryValue}
              setItems={setCategory}
              zIndex={2000}
              zIndexInverse={1000}
            />
            <DropDownPicker
              style={styles.dropdown}
              textStyle={styles.textStyle}
              dropDownContainerStyle={styles.dropdown}
              placeholder={STRING.SUB_CATEGORY}
              placeholderStyle={styles.placeholder}
              arrowIconStyle={styles.arrowIconStyle}
              open={openSubCategory}
              value={subCategoryValue}
              items={subCategory}
              setOpen={setOpenSubCategory}
              setValue={setSubCategoryValue}
              setItems={setSubCategory}
              zIndex={1000}
              zIndexInverse={2000}
            />
            <View style={styles.locationContainer}>
              <TextInput
                style={styles.locationInput}
                placeholder={STRING.LOCATION}
                placeholderTextColor={COLORS.C2}
              />
              <CustomButton
                text={STRING.LOCATE}
                Icon={() => (
                  <View style={styles.locationIcon}>
                    <LocationIcon />
                  </View>
                )}
              />
            </View>
            <InputContainer>
              <TouchableOpacity style={styles.picView}>
                <Image source={IMAGE.uploadPic} style={styles.image} />
              </TouchableOpacity>
              <View style={styles.uploadPicTextContainer}>
                <Text
                  style={
                    styles.uploadPicText
                  }>{`${STRING.UPLOAD_PHOTO} ${STRING.OPTIONAL}`}</Text>
                <Text style={styles.uploadLimitText}>
                  {STRING.MAX_UPLOAD_PIC_SIZE}
                </Text>
              </View>
            </InputContainer>

            <AdditionalInfoInput />

            <CustomButton text={STRING.POST_COMPLAINT} onPress={postCompaint} />
          </View>
        </Card>
        <CustomCardInfo
          title={STRING.PAST_COMPLAINT}
          body={`${prevRequest} ${STRING.REQUEST_FOUND}`}
          onPress={viewPastComplaints}
          image={IMAGE.stopwatch}
        />
        <View style={paddingBottom} />
      </ScrollView>
    </Container>
  );
};

export default Complaints;
