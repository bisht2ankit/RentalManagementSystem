import React from 'react';
import { Image, View, FlatList, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import images from '../constants/images';
import globalStyles from '../constants/globalStyles';
import rightArrow from '../assets/rightArrow.png';
import PropTypes from 'prop-types';

export const Categories = (props) => {

    const { data, setSubCategories } = props;

    const renderItem = (item, index) => {
        const { name, image, subcategories } = item;
        return (
            <View key={index} style={[styles.card, globalStyles.shadow]}>
                <Image resizeMode="contain" source={images.categories[image]} style={styles.banner} />
                <TouchableOpacity style={styles.footer} onPress={() => setSubCategories(subcategories)}>
                    <Text style={styles.footerTxt}>{name}</Text>
                    <Image source={rightArrow} style={styles.arrow} />
                </TouchableOpacity>
            </View>
        )
    }
    
    return (
        <FlatList
            columnWrapperStyle={[styles.columnWrapperStyle]}
            showsVerticalScrollIndicator={false}
            data={data}
            numColumns={2}
            renderItem={({ item, index }) => (renderItem(item, index))}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}

Categories.propTypes = {
    data: PropTypes.array.isRequired,
    setSubCategories: PropTypes.func.isRequired
}