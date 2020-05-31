import React, { useState } from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { styles } from './styles';
import { Locations, Categories } from '../components';
import { constants } from '../constants/strings';
import downIcon from '../assets/downIcon.png';
import {connect} from 'react-redux';
import { setCategories } from '../actions';

const HomeScreen = (props) => {
    const {categories} = props;
    const [isLocVisible, setIsLocVisible] = useState(false);

    const storeCategories = (categories) => {
        props.setCategories(categories);
        setIsLocVisible(false);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.header} onPress={() => setIsLocVisible(true)}>
                <Text style={styles.boldTxt}>{constants.location.selectLocation}</Text>
                <Image source={downIcon} style={styles.icon} />
            </TouchableOpacity>
            <View style={styles.flexContainer}>
                {
                    categories.length > 0
                    ?
                    <Categories data={categories}/>
                    :
                    <View>
                        <Text style={styles.heading}>{constants.landing.welcome}</Text>
                        <Text style={styles.subtitle}>{constants.landing.selectLocation}</Text>
                    </View>
                }
            </View>
            <Locations visible={isLocVisible} closeModal={() => setIsLocVisible(false)} setCategories={storeCategories}/>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps, {setCategories})(HomeScreen);