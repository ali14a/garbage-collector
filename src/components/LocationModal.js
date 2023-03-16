import {useNavigation} from '@react-navigation/native';
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

const LocationModal = ({
  refRBSheet,
  height,
  data,
  showPicker,
  onPress,
  selectedBuilding,
}) => {
  const navigation = useNavigation();
  const _renderItem = ({item}) => {
    const {address_line_one, address_line_two, locality, house, floor} =
      item.address;
    return (
      <>
        {selectedBuilding === item ? null : (
          <>
            <TouchableOpacity style={row} onPress={() => onPress(item)}>
              <Ionicons
                name={'checkmark-circle-outline'}
                size={sizes.h2}
                color={COLORS.PRIMARY}
              />
              <View style={styles.addressContainer}>
                {address_line_one === '' ? null : (
                  <Text style={styles.titleText}>
                    {address_line_one} {address_line_two}
                  </Text>
                )}
                <Text style={styles.addressText}>
                  {locality &&
                    `${STRING.HOUSE_NUM} ${address_line_one}, ${address_line_two}, ${locality}`}
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.seperator} />
          </>
        )}
      </>
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
      <Text style={styles.headingText}>{STRING.CHOOSE_LOCATION}</Text>

      <FlatList
        data={data}
        renderItem={_renderItem}
        ListHeaderComponent={() => (
          <>
            <View style={row}>
              <Ionicons
                name={'checkmark-circle'}
                size={sizes.h2}
                color={COLORS.PRIMARY}
              />
              <View style={styles.addressContainer}>
                {selectedBuilding?.address?.address_line_one === '' ? null : (
                  <Text style={styles.titleText}>
                    {selectedBuilding?.address?.address_line_one}{' '}
                    {selectedBuilding?.address?.address_line_two}
                  </Text>
                )}
                <Text style={styles.addressText}>
                  {selectedBuilding?.address?.locality &&
                    `${STRING.HOUSE_NUM} ${selectedBuilding?.address?.address_line_one}, ${selectedBuilding?.address?.address_line_two}, ${selectedBuilding?.address?.locality}`}
                </Text>
              </View>
            </View>
            <View style={styles.seperator} />
          </>
        )}
        ListFooterComponent={() => (
          <>
            {showPicker && (
              <>
                <View style={styles.seperator} />
                <TouchableOpacity
                  onPress={() => navigation.navigate('Choose Location')}
                  style={[styles.addressContainer, styles.chooseOnMap]}>
                  <Text style={styles.titleText}>{STRING.CHOOSE_ON_MAP}</Text>
                </TouchableOpacity>
              </>
            )}
          </>
        )}
        contentContainerStyle={{paddingBottom: padding.generic}}
        showsVerticalScrollIndicator={false}
      />
    </RBSheet>
  );
};

export default LocationModal;
LocationModal.defaultProps = {
  showPicker: false,
};
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
  chooseOnMap: {
    paddingVertical: padding.generic,
  },
});
