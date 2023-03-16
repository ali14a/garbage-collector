import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Container,
  CustomCardInfo,
  CustomHeader,
  SearchComponent,
} from '../../components';
import {IMAGE} from '../../utils/constant/images';
import {STRING} from '../../utils/constant/strings';
import {elevation, margin, padding, row} from '../../utils/styles/globalStyle';
import {wp} from '../../utils/styles/responsive';
import {COLORS} from '../../utils/styles/theme';

const Contacts = props => {
  const {category} = props.route.params;
  const [data, setData] = useState([
    {
      id: 0,
      image: IMAGE.dummyPic,
      name: 'Mr. Gaurav Anand',
      contact: '(907) 555-0101',
    },
    {
      id: 2,
      image: IMAGE.dummyPic,
      name: 'Mr. Gaurav Anand',
      contact: '(907) 555-0101',
    },
    {
      id: 3,
      image: IMAGE.dummyPic,
      name: 'Mr. Gaurav Anand',
      contact: '(907) 555-0101',
    },
  ]);
  const RightBtns = () => (
    <View style={styles.btns}>
      <TouchableOpacity style={styles.btnContainer}>
        <Image source={IMAGE.phone} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnContainer}>
        <Image source={IMAGE.mail} />
      </TouchableOpacity>
    </View>
  );
  const renderItem = ({item}) => {
    return (
      <CustomCardInfo
        image={item.image}
        title={item.name}
        body={item.contact}
        disabled={true}
        Buttons={() => <RightBtns />}
      />
    );
  };
  const getTitle = () => {
    switch (category) {
      case STRING.DMC:
        return STRING.DMC;
      case STRING.AMC:
        return STRING.AMC;
      case STRING.ZONAL_SANITORY_INSPECTOR:
        return STRING.ZONAL_SANITORY_INSPECTOR;
      case STRING.CIRCLE_OFFICER:
        return STRING.CIRCLE_OFFICER;
      case STRING.SUPERVISORS:
        return STRING.SUPERVISORS;
      default:
        return '';
    }
  };
  return (
    <Container>
      <CustomHeader title={getTitle() + ' ' + STRING.CONTACTS} />
      <SearchComponent />
      <FlatList data={data} renderItem={renderItem} />
    </Container>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  btns: {
    ...row,
  },
  btnContainer: {
    ...elevation,
    borderRadius: wp(20),
    padding: padding.small,
    backgroundColor: COLORS.WHITE,
    marginHorizontal: margin.small,
  },
});
