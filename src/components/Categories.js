import React from 'react';
import { Image, View, FlatList, Text } from 'react-native';
import { styles } from './styles';
import images from '../constants/images';
import globalStyles from '../constants/globalStyles';
import rightArrow from '../assets/rightArrow.png';

export const Categories = (props) => {

    const {data} = props;

    const renderItem = (item, index) => {
        const {name, image} = item;
        return (
            <View key={index} style={[styles.card, globalStyles.shadow]}>
                <Image resizeMode="contain" source={images.categories[image]} style={styles.banner}/>
                <View style={styles.footer}>
                    <Text style={styles.footerTxt}>{name}</Text>
                    <Image source={rightArrow} style={styles.arrow}/>
                </View>
            </View>
        )
    }
    return(
            <FlatList
                columnWrapperStyle={[styles.columnWrapperStyle]}
                data={data}
                numColumns={2}
                renderItem={({item, index}) => (renderItem(item, index))}
                keyExtractor={(item, index) => index.toString()}
                />
    )
}