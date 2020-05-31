import React, { useState } from 'react';
import { View, FlatList, LayoutAnimation, Modal, TouchableOpacity, Image } from 'react-native';
import locationsArr from '../constants/locations.json';
import { Accordian } from './Accordian';
import { styles } from './styles';
import { SearchBar } from './SearchBar';
import closeIcon from '../assets/close.png';
import PropTypes from 'prop-types';

export const Locations = (props) => {
    const { visible, closeModal, setCategories, setLocation } = props;

    let dataArr = locationsArr.data.locations;

    const [accordianData, setAccordianData] = useState(dataArr);

    renderLocations = (item, index) => {
        return <Accordian
            item={item}
            index={index}
            updateLayoutCallback={updateLayout}
            setCategories={setCategories}
            setLocation={setLocation}
        />
    }

    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const arr = dataArr.map((item) => {
            const newItem = Object.assign({}, item);
            newItem.expanded = false;
            return newItem;
        })
        arr[index].expanded = true;
        setAccordianData(arr);
    }

    const searchResultCallback = (query) => {
        const pattern = new RegExp(`.*${query}.*`, 'i');
        const filteredResults = accordianData.filter(item => item.name.match(pattern));
        if (query.length > 0) setAccordianData(filteredResults)
        else setAccordianData(dataArr)
    }

    return (
        <Modal animationType="fade"
            visible={visible}
            animationType="slide"
        >
            <View style={styles.container}>
                <View style={styles.row}>
                    <SearchBar searchResultCallback={searchResultCallback} />
                    <TouchableOpacity onPress={closeModal}>
                        <Image source={closeIcon} style={styles.closeIcon} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={accordianData}
                    keyExtractor={(item, id) => item.dealers_id}
                    renderItem={({ item, index }) => (renderLocations(item, index))}
                />
            </View>
        </Modal>
    )
}

Locations.propTypes = {
    visible: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    setCategories: PropTypes.func.isRequired,
    setLocation: PropTypes.func.isRequired   
}