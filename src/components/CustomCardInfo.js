import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card} from '.';
import {
  borderRadius,
  center,
  margin,
  mediumText,
  padding,
  row,
  spaceBetween,
  spaceEvenly,
} from '../utils/styles/globalStyle';
import {COLORS} from '../utils/styles/theme';

const CustomCardInfo = ({
  title,
  body,
  onPress,
  Buttons,
  disabled,
  LeftComponent,
  image,
}) => {
  return (
    <Card>
      <TouchableOpacity style={row} onPress={onPress} disabled={disabled}>
        {LeftComponent && <LeftComponent />}
        {image && (
          <View style={styles.iconContainer}>
            <Image source={image} />
          </View>
        )}
        <View style={styles.infoContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.bodyText}>{body}</Text>
          </View>
          {Buttons && <Buttons />}
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default CustomCardInfo;

const styles = StyleSheet.create({
  iconContainer: {
    padding: padding.tiny,
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
