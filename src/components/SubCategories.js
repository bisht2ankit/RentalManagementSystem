import React from 'react';
import { Image, View, FlatList, Text, TouchableOpacity, Modal } from 'react-native';
import { styles } from './styles';
import images from '../constants/images';
import globalStyles from '../constants/globalStyles';
import crossIcon from '../assets/close.png';

export const SubCategories = (props) => {

    const { data, visible, closeSubCategory } = props;

    const renderItem = (item, index) => {
        const { name, image } = item;
        return (
            <View key={index} style={[styles.card, globalStyles.shadow]}>
                <Image resizeMode="contain" source={images.subcategories[image]} style={styles.banner} />
                <View style={styles.subFooter}>
                    <Text style={[styles.footerTxt,{textAlign: 'center'}]}>{name}</Text>
                </View>
            </View>
        )
    }

    return (
        <Modal animationType="fade"
            visible={visible}
            animationType="slide"
        >
            <View style={styles.container}>
                <TouchableOpacity onPress={closeSubCategory}>
                    <Image source={crossIcon} style={styles.rightIcon} />
                </TouchableOpacity>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={[styles.columnWrapperStyle]}
                    data={data}
                    numColumns={2}
                    renderItem={({ item, index }) => (renderItem(item, index))}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </Modal>
    )
}