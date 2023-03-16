import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {
  Container,
  CustomCardInfo,
  CustomHeader,
  SearchComponent,
} from '../../components';
import {IMAGE} from '../../utils/constant/images';
import {STRING} from '../../utils/constant/strings';
import {
  borderRadius,
  center,
  margin,
  mediumText,
  padding,
  row,
  spaceBetween,
  spaceEvenly,
} from '../../utils/styles/globalStyle';
import {COLORS} from '../../utils/styles/theme';

const PastReqComplaint = props => {
  const {type} = props.route.params;
  const [data, setData] = useState([
    {
      id: 0,
      image: IMAGE.stopwatch,
      location: 'Geeta colony road',
      date: '29 Dec 2020',
      status: 'Resolved',
    },
    {
      id: 2,
      image: IMAGE.stopwatch,
      location: 'Geeta colony road',
      date: '29 Dec 2020',
      status: 'Resolved',
    },
    {
      id: 3,
      image: IMAGE.stopwatch,
      location: 'Geeta colony road',
      date: '29 Dec 2020',
      status: 'Working',
    },
  ]);
  const renderItem = ({item}) => {
    const getBgColor = () => {
      switch (item.status) {
        case 'Resolved':
          return COLORS.RESOLVED;
        case 'Working':
          return COLORS.MISSED_YELLOW;
      }
    };
    const getText = () => {
      switch (item.status) {
        case 'Resolved':
          return STRING.RESOLVED;
        case 'Working':
          return STRING.ON_THE_JOB;
      }
    };
    const RightBtns = () => (
      <View style={[styles.statusContainer, {backgroundColor: getBgColor()}]}>
        <Text style={styles.statusText}>{getText()}</Text>
      </View>
    );
    return (
      <CustomCardInfo
        LeftComponent={() => <Image source={item.image} />}
        title={item.location}
        body={item.date}
        Buttons={() => <RightBtns />}
      />
    );
  };
  return (
    <Container>
      <CustomHeader
        title={
          type === 'request'
            ? `${STRING.REQUESTS} ${STRING.STATUS}`
            : `${STRING.COMPLAINTS} ${STRING.STATUS}`
        }
      />
      <SearchComponent />
      <FlatList data={data} renderItem={renderItem} />
    </Container>
  );
};

export default PastReqComplaint;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: margin.generic,
  },
  iconContainer: {
    padding: padding.normal,
    marginVertical: margin.tiny,
  },
  textContainer: {
    ...spaceEvenly,
    marginHorizontal: margin.small,
  },
  titleText: {
    ...mediumText,
  },
  bodyText: {
    fontWeight: '400',
    color: COLORS.PRIMARY_LIGHT,
  },
  infoContainer: {
    ...row,
    ...center,
    ...spaceBetween,
    flex: 1,
  },
  statusContainer: {
    ...center,
    borderRadius: borderRadius.big,
  },
  statusText: {
    ...mediumText,
    paddingHorizontal: padding.generic,
    paddingVertical: padding.small,
    color: COLORS.WHITE,
  },
});
