import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {STRING} from '../utils/constant/strings';
import {margin, mediumText, row} from '../utils/styles/globalStyle';
import {COLORS} from '../utils/styles/theme';
import Card from './Card';
import {SearchIcon} from './Icons';

const SearchComponent = () => {
  return (
    <Card>
      <View style={styles.searchContainer}>
        <SearchIcon color={COLORS.PRIMARY_LIGHT} />
        <Text style={styles.searchText}>{STRING.SEARCH_HERE}</Text>
      </View>
    </Card>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  searchContainer: {
    ...row,
    marginVertical: margin.tiny,
  },
  searchText: {
    ...mediumText,
    color: COLORS.C2,
    marginLeft: margin.small,
  },
});
