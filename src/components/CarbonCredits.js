import numbro from 'numbro';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IMAGE} from '../utils/constant/images';
import {center, mediumText, row, sizes} from '../utils/styles/globalStyle';
import {COLORS} from '../utils/styles/theme';

const CarbonCredits = props=> {
  const credits = props.credits || 34555;
  return (
    <View style={row}>
      <Text style={[styles.credits, {color: props.color}]}>
        {numbro(credits).format({
          thousandSeparated: true,
        })}
      </Text>
      <View style={center}>
        <Image
          source={
            props.color === COLORS.WHITE
              ? IMAGE.carbonCreditWhite
              : IMAGE.carbonCredit
          }
          width={1}
          height={1}
        />
      </View>
    </View>
  );
};

export default CarbonCredits;
CarbonCredits.defaultProps = {
  color: COLORS.ORANGE1,
};
const styles = StyleSheet.create({
  credits: {
    ...mediumText,
    fontSize: sizes.h5,
  },
});
