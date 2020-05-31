import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';
import { constants } from '../constants/strings';
import { colors } from '../constants/colors';

export const SearchBar = (props) => {
    const { searchResultCallback } = props;
    return (
        <TextInput
            style={styles.searchBar}
            onChangeText={searchResultCallback}
            placeholder={constants.location.searchLocation}
            placeholderTextColor={colors.SEARCH_BAR_BACKGROUND}
        />
    )
}