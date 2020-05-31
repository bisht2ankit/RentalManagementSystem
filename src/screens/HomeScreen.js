import React, { useState } from 'react';
import { Image, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { styles } from './styles';
import { Locations } from '../components/Locations';
import { constants } from '../constants/strings';
import downIcon from '../assets/downIcon.png';


export const HomeScreen = () => {

    const [isLocVisible, setIsLocVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.header} onPress={() => setIsLocVisible(true)}>
                <Text style={styles.boldTxt}>{constants.location.selectLocation}</Text>
                <Image source={downIcon} style={styles.icon} />
            </TouchableOpacity>
            <Locations visible={isLocVisible} closeModal={() => setIsLocVisible(false)}/>
        </SafeAreaView>
    )
}