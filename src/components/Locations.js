import React, { useState } from 'react';
import { View, FlatList, LayoutAnimation } from 'react-native';
import locationsArr from '../constants/locations.json';
import { Accordian } from './Accordian';
import { styles } from './styles';
import { SearchBar } from './SearchBar';

export const Locations = () => {
    let dataArr = locationsArr.data.locations;

    const [accordianData, setAccordianData] = useState(dataArr);

    renderLocations = (item, index) => {
        return <Accordian item={item} index={index} updateLayoutCallback={updateLayout} />
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
        if(query.length > 0) setAccordianData(filteredResults)
        else setAccordianData(dataArr)
    }

    return (
        <View style={styles.container}>
            <SearchBar searchResultCallback={searchResultCallback}/>
            <FlatList
                data={accordianData}
                keyExtractor={(item, id) => item.dealers_id}
                renderItem={({ item, index }) => (renderLocations(item, index))}
            />
        </View>
    )
}
