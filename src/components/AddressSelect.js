import React, {useRef} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {changeBuilding} from '../redux/HomeComponent/HomeActions';
import {STRING} from '../utils/constant/strings';
import {center, row, sizes} from '../utils/styles/globalStyle';
import {wp} from '../utils/styles/responsive';
import {COLORS, FONTS} from '../utils/styles/theme';
import LocationModal from './LocationModal';

const AddressSelect = props => {
  const {buildingArr, selectedBuilding, changeBuilding} = props;
  const {address} = selectedBuilding;
  const refRBSheet = useRef(null);
  const onLocationSelection = building => {
    changeBuilding(building);

    refRBSheet.current.close();
  };
  return (
    <>
      <Pressable
        onPress={() => refRBSheet.current.open()}
        style={styles.addressSelect}>
        <Text style={styles.addressText}>
          {/* address_line_one: "24/585"
address_line_two: "Arjun Nagar"
city: "Rewa"
country: "IND"
district: "Rewa"
id_country: 91
id_state: null
locality: "Arjun Nagar"
postcode: "486001"
state: "Madhya Pradesh" */}
          {address?.address_line_one} {address?.address_line_two}{' '}
          {address?.city}
          {/* {addressArr.map(address =>
            address.selected ? `Hno. ${address.house}, ${address.floor}` : '',
          )} */}
        </Text>
        <View style={center}>
          <Ionicons name={'chevron-down'} style={styles.selectIcon} />
        </View>
      </Pressable>
      <LocationModal
        refRBSheet={refRBSheet}
        height={320}
        heading={STRING.CHOOSE_ADDRESS}
        data={buildingArr}
        onPress={onLocationSelection}
        selectedBuilding={selectedBuilding}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    // addressArr: state.home.addressArr,
    buildingArr: state.home.buildingArr,
    selectedBuilding: state.home.selectedBuilding,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeBuilding: address => dispatch(changeBuilding(address)),
  };
};
const wrappedAddressSelect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressSelect);
export default wrappedAddressSelect;

const styles = StyleSheet.create({
  addressSelect: {
    ...row,
    width: wp(220),
    justifyContent: 'center',
  },
  addressText: {
    width: wp(200),
    fontSize: sizes.h5,
    fontFamily: FONTS.ROBOTO_MEDIUM,
    color: COLORS.PRIMARY,
  },
  selectIcon: {
    width: wp(20),
    fontSize: sizes.h7,
  },
});
