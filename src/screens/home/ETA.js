import React from 'react';
import { Image, Text, View } from 'react-native';
import { Bar } from 'react-native-progress';
import { IMAGE } from '../../utils/constant/images';
import { STRING } from '../../utils/constant/strings';
import { margin, mediumText } from '../../utils/styles/globalStyle';
import { hp, wp } from '../../utils/styles/responsive';
import { COLORS } from '../../utils/styles/theme';
import { styles } from './Home.styles';


const ETA = ({ eta, showImage, showInstructions }) => {
  return (
    <View style={styles.reachingInContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={[mediumText, styles.reachingInText]}>
            {STRING.REACHING_IN}
          </Text>
          <Text style={[mediumText, styles.etaText]}>{eta}</Text>
        </View>
        <View>
          {showImage && (
            <Image resizeMode="contain" style={{width:wp(42) ,height:hp(50)}} source={IMAGE.binImg} />
          )}
        </View>
      </View>
      <Bar
        style={{
          marginTop: margin.normal,
          marginVertical: margin.generic,
        }}
        color={COLORS.PRIMARY}
        unfilledColor={COLORS.DULL_GREY}
        borderWidth={0}
        progress={0.9}
        width={wp(344)}
      />

      <Text style={[mediumText, { fontSize: wp(18), fontWeight: '700' }]}>
        {STRING.GET_BIN}
      </Text>
      {showInstructions && (
        <Text
          style={[
            mediumText,
            styles.reachingInText,
            {
              textTransform: 'capitalize',
              marginTop: margin.normal,
            },
          ]}>
          {STRING.BIN_INSTRUCTIONS}
        </Text>
      )}
     
    </View>
  );
};

export default ETA;

ETA.defaultProps = {
  showImage: true,
  showInstructions: true,
};
