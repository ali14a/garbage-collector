import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Container, CustomCardInfo, SearchComponent} from '../../components';
import {IMAGE} from '../../utils/constant/images';
import {STRING} from '../../utils/constant/strings';

const Phonebook = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 0,
      title: STRING.DMC,
      body: `31 ${STRING.DMC} ${STRING.ENLISTED}`,
      image: IMAGE.dmc,
    },
    {
      id: 1,
      title: STRING.AMC,
      body: `31 ${STRING.AMC} ${STRING.ENLISTED}`,
      image: IMAGE.amc,
    },
    {
      id: 2,
      body: `31 ${STRING.CIRCLE_OFFICER} ${STRING.ENLISTED}`,
      title: STRING.CIRCLE_OFFICER,
      image: IMAGE.circleOfficer,
    },
    {
      id: 3,
      body: `31 ${STRING.ZONAL_SANITORY_INSPECTOR} ${STRING.ENLISTED}`,
      title: STRING.ZONAL_SANITORY_INSPECTOR,
      image: IMAGE.zonalInspector,
    },
    {
      id: 4,
      body: `31 ${STRING.SUPERVISORS} ${STRING.ENLISTED}`,
      title: STRING.SUPERVISORS,
      image: IMAGE.supervisor,
    },
  ];
  const onPressCategory = category => {
    navigation.navigate('Contacts', {category: category.title});
  };
  const renderItem = ({item}) => (
    <CustomCardInfo
      title={item.title}
      body={item.body}
      image={item.image}
      onPress={() => onPressCategory(item)}
    />
  );
  return (
    <Container>
      <SearchComponent />
      <FlatList data={data} renderItem={renderItem} />
    </Container>
  );
};

export default Phonebook;

const styles = StyleSheet.create({});
