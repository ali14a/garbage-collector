import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {STRING} from '../utils/constant/strings';
import {
  borderRadius,
  margin,
  mediumText,
  padding,
  row,
  sizes,
} from '../utils/styles/globalStyle';
import {hp, wp} from '../utils/styles/responsive';
import {COLORS} from '../utils/styles/theme';

const BottomModal = ({
  refRBSheet,
  height,
  data,
  heading,
  onSelectModalOptions,
}) => {
  const _renderItem = ({item}) => {
    const getSubText = () => {
      if (heading === STRING.CHOOSE_ADDRESS) {
        return `${STRING.HOUSE_NUM} ${item.house}, ${item.floor}, ${item.locality}`;
      } else {
        switch (item.title) {
          case STRING.TOTAL_WASTE_COLLECTED:
            return `${STRING.SHOW} ${STRING.TOTAL_WASTE_COLLECTED}`;
          case STRING.ONLY_DRY_WASTE:
            return `${STRING.SHOW} ${STRING.ONLY_DRY_WASTE}`;
          case STRING.ONLY_WET_WASTE:
            return `${STRING.SHOW} ${STRING.ONLY_WET_WASTE}`;
          case STRING.ONLY_HAZARDOUS_WASTE:
            return `${STRING.SHOW} ${STRING.ONLY_HAZARDOUS_WASTE}`;
        }
      }
    };
    return (
      <TouchableOpacity
        style={row}
        onPress={() => onSelectModalOptions(item.id)}>
        <Ionicons
          name={item.selected ? 'checkmark-circle' : 'checkmark-circle-outline'}
          size={sizes.h2}
          color={COLORS.PRIMARY}
        />
        <View style={styles.addressContainer}>
          {item.title === '' ? null : (
            <Text style={styles.titleText}>{item.title}</Text>
          )}

          <Text style={[styles.addressText, {textTransform: 'lowercase'}]}>
            {getSubText()}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={false}
      closeOnPressMask={true}
      height={hp(height)}
      customStyles={{
        container: styles.container,
      }}>
      <Text style={styles.headingText}>{heading}</Text>
      <FlatList
        data={data}
        renderItem={_renderItem}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        showsVerticalScrollIndicator={false}
      />
    </RBSheet>
  );
};

export default BottomModal;

const styles = StyleSheet.create({
  container: {
    borderTopStartRadius: borderRadius.extraBig,
    borderTopEndRadius: borderRadius.extraBig,
    paddingHorizontal: padding.extraLarge,
  },
  headingText: {
    ...mediumText,
    fontSize: sizes.h4,
    fontWeight: '700',
    paddingVertical: padding.large,
  },
  seperator: {
    width: wp(346),
    borderWidth: hp(0.5),
    borderColor: COLORS.PRIMARY_LIGHT,
    marginVertical: margin.generic,
  },
  titleText: {
    fontWeight: '700',
    fontSize: sizes.h5,
  },
  addressContainer: {
    marginLeft: margin.normal,
  },
  addressText: {
    ...mediumText,
    fontSize: sizes.h6,
    color: COLORS.B7,
  },
});
