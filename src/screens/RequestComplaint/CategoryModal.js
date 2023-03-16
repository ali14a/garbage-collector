import numbro from 'numbro';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Container, CustomCardInfo, SearchComponent} from '../../components';
import {IMAGE} from '../../utils/constant/images';
import {STRING} from '../../utils/constant/strings';
import {
  borderRadius,
  center,
  margin,
  mediumText,
  padding,
  row,
  sizes,
} from '../../utils/styles/globalStyle';
import {deviceHeight, hp, wp} from '../../utils/styles/responsive';
import {COLORS} from '../../utils/styles/theme';
const CategoryModal = ({visible, toggleModal, onSelect}) => {
  const categories = [
    {
      id: 0,
      title: 'Category 1',
      subCategory: [
        {
          id: 0,
          price: 20,
          title: 'Sub category 1',
          desc: 'Description',
          selected: false,
        },
        {
          id: 2,
          price: 20,
          title: 'Sub category 1',
          desc: 'Description',
          selected: false,
        },
      ],
    },
    {
      id: 1,
      title: 'Category 2',
      subCategory: [
        {
          price: 20,
          title: 'Sub category 1',
          desc: 'Description',
          selected: false,
        },
      ],
    },
    {
      id: 2,
      title: 'Category 3',
      subCategory: [
        {
          price: 20,
          title: 'Sub category 1',
          desc: 'Description',
          selected: false,
        },
        {
          price: 20,
          title: 'Sub category 1',
          desc: 'Description',
          selected: true,
        },
      ],
    },
    {
      id: 3,
      title: 'Category 4',
      subCategory: [
        {
          price: 20,
          title: 'Sub category 1',
          desc: 'Description',
          selected: false,
        },
      ],
    },
  ];
  const [filteredData, setFilteredData] = useState(categories);
  const [filterBy, setFilterBy] = useState(STRING.ALL);
  const changeFilterBy = title => {
    setFilterBy(title);
    const filteredData = categories.filter(
      category => category.title === title,
    );
    filteredData.length > 0
      ? setFilteredData(filteredData)
      : setFilteredData(categories);
  };
  const onSubCategorySelect = (category, subCategory) => {
    onSelect(category, subCategory);
  };
  const RenderFilterList = ({title}) => {
    return (
      <TouchableOpacity
        onPress={() => changeFilterBy(title)}
        style={
          title === filterBy
            ? [styles.filterByBtn, {borderBottomWidth: 3}]
            : styles.filterByBtn
        }>
        <Text style={styles.filterByText}>{title}</Text>
      </TouchableOpacity>
    );
  };
  const renderItem = ({item}) => (
    <View style={styles.listItemContainer}>
      <View style={styles.catTitle}>
        <Image
          source={IMAGE.homeHeart}
          width={wp(16)}
          height={wp(18)}
          style={{width: wp(16), height: wp(18)}}
        />
        <Text style={styles.catTitleText}>{item.title}</Text>
      </View>
      {item.subCategory.map(subcat => {
        return (
          <CustomCardInfo
            key={subcat.id}
            title={subcat.title}
            body={subcat.desc}
            onPress={() => onSubCategorySelect(item.title, subcat)}
            LeftComponent={() => (
              <Text style={mediumText}>
                {numbro(subcat.price).formatCurrency({
                  thousandSeparated: true,
                  currencySymbol: '₹ ',
                })}
              </Text>
            )}
            Buttons={() => (
              <Ionicons
                name={
                  subcat.selected
                    ? 'checkmark-circle'
                    : 'checkmark-circle-outline'
                }
                size={sizes.h2}
                color={COLORS.C2}
              />
            )}
          />
        );
      })}
    </View>
  );
  return (
    <Modal
      isVisible={visible}
      deviceHeight={deviceHeight + hp(20)}
      onSwipeComplete={toggleModal}
      backdropOpacity={1}
      backdropColor={COLORS.F8}
      supportedOrientations={['portrait', 'landscape']}
      style={{margin: 0}}>
      <Container>
        <Pressable onPress={toggleModal} style={styles.goBackContainer}>
          <FontAwesome name="angle-left" size={hp(36)} color={COLORS.PRIMARY} />
        </Pressable>
        <View style={styles.header}>
          <Text style={styles.headerText}>{STRING.CHOOSE_CATEGORY}</Text>
        </View>
        <SearchComponent />
        <View>
          <ScrollView
            horizontal
            style={styles.filterByContainer}
            showsHorizontalScrollIndicator={false}>
            <RenderFilterList title={STRING.ALL} />
            {categories.map(category => (
              <RenderFilterList key={category.id} title={category.title} />
            ))}
          </ScrollView>
        </View>
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          style={styles.listStyle}
        />
      </Container>
    </Modal>
  );
};

export default CategoryModal;

const styles = StyleSheet.create({
  goBackContainer: {
    width: wp(60),
    paddingTop: padding.extraLarge,
    paddingBottom: padding.generic,
  },
  catTitle: {
    ...row,
    paddingVertical: padding.generic,
    paddingHorizontal: padding.generic,
    alignContent: 'center',
  },
  catTitleText: {
    ...mediumText,
    marginLeft: margin.generic,
  },
  headerText: {
    ...mediumText,
    fontSize: sizes.h1,
    fontWeight: '700',
    marginBottom: margin.generic,
  },
  listStyle: {
    paddingTop: margin.big,
  },
  listItemContainer: {
    backgroundColor: COLORS.WHITE,
    marginBottom: margin.generic,
    borderRadius: borderRadius.big,
  },
  filterByContainer: {
    height: hp(50),
    marginTop: margin.extrabig,
  },
  filterByBtn: {
    marginRight: padding.generic,
    minWidth: wp(60),
    ...center,
  },
  filterByText: {
    ...mediumText,
    ...center,
  },
});
