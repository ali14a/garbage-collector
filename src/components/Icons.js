import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {sizes} from '../utils/styles/globalStyle';
import {COLORS} from '../utils/styles/theme';
const defaultColor = COLORS.WHITE;
const defaultSize = sizes.h4;
export const LocationIcon = ({color, size}) => (
  <Ionicons
    name={'location-sharp'}
    size={size || defaultSize}
    color={color || defaultColor}
  />
);
export const StopwatchIcon = () => <Fontisto name={'stopwatch'} size={20} />;

export const AddImageIcon = ({color, size}) => (
  <MaterialIcon
    name={'add-photo-alternate'}
    color={color || defaultColor}
    size={size || defaultSize}
  />
);

export const CalendarIcon = ({color, size}) => (
  <MaterialCommunityIcon
    name={'calendar-today'}
    size={size || defaultSize}
    color={color || defaultColor}
  />
);

export const RightArrow = ({color, size}) => (
  <Ionicons
    name={'chevron-forward'}
    size={size || defaultSize}
    color={color || defaultColor}
  />
);

export const SearchIcon = ({size, color}) => (
  <Ionicons
    name={'search'}
    size={size || defaultSize}
    color={color || defaultColor}
  />
);
