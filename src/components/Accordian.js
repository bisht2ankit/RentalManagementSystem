import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Animated } from 'react-native';
import {styles} from './styles';
import upIcon from '../assets/upIcon.png';
import downIcon from '../assets/downIcon.png';

export const Accordian = (props) => {
    const [panelHeight, setViewHeight] = useState(0);

    const {item, index, updateLayoutCallback, setCategories, setLocation} = props;
    const { name, branches, expanded } = item;

    useEffect(() => {
        if(props.item.expanded){
            setViewHeight(null);
        } else {
            setViewHeight(0);
        }
    }, [props.item.expanded])

    const renderContent = (branches) => {
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                data={branches}
                keyExtractor={(item, id) => item.branch_id}
                renderItem={({ item, index }) => (renderContentItem(item, index))}
            />
        )
    }

    const renderContentItem = (item, index) => {
        const { name, categories } = item;
        return (
            <TouchableOpacity key={index} onPress={() => {setCategories(categories), setLocation(name)}}>
                <Text style={styles.panelTxt}>{name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <TouchableOpacity style={styles.panelHolder} onPress={() => updateLayoutCallback(index)} >
                <Text style={styles.panelBtnTxt}>{name}</Text>
                <Image source={expanded ? upIcon : downIcon} style={styles.icon}/>
            </TouchableOpacity>
            <Animated.View style={{ height: panelHeight}}>
                {expanded && renderContent(branches)}
            </Animated.View>
        </View>
    )
}