import React from 'react';
import {View} from 'react-native';
import { styles } from './styles';
import { Locations } from '../components/Locations';

export const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <Locations/>
        </View>
    )
}