import React, { useState } from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { styles } from './styles';
import { Locations, Categories, SubCategories } from '../components';
import { constants } from '../constants/strings';
import downIcon from '../assets/downIcon.png';
import { connect } from 'react-redux';
import { setCategories, setSubCategories } from '../actions';


const HomeScreen = (props) => {
    const { catData, setCategories, setSubCategories } = props;
    const { categories, subCategories } = catData;
    const [isLocVisible, setIsLocVisible] = useState(false);
    const [isSubCatVisible, setIsSubCatVisible] = useState(false);

    const storeCategories = (categories) => {
        setCategories(categories);
        setIsLocVisible(false);
    }

    storeSubCategories = (subCategories) => {
        setSubCategories(subCategories);
        setIsSubCatVisible(true);
    }

    const renderHeader = () => {
        return (
            <TouchableOpacity style={styles.header} onPress={() => setIsLocVisible(true)}>
                <Text style={styles.boldTxt}>{constants.location.selectLocation}</Text>
                <Image source={downIcon} style={styles.icon} />
            </TouchableOpacity>
        )
    }

    const renderCategories = () => {
        return (
            <View style={styles.flexContainer}>
                {
                    categories.length > 0
                        ?
                        <Categories data={categories} setSubCategories={storeSubCategories} />
                        :
                        <View>
                            <Text style={styles.heading}>{constants.landing.welcome}</Text>
                            <Text style={styles.subtitle}>{constants.landing.selectLocation}</Text>
                        </View>
                }
            </View>
        )
    }

    const renderLocations = () => {
        return <Locations visible={isLocVisible} closeModal={() => setIsLocVisible(false)} setCategories={storeCategories} />
    }

    const renderSubCategories = () => {
        return <SubCategories data={subCategories} visible={isSubCatVisible} closeSubCategory={() => setIsSubCatVisible(false)}/>
    }

    return (
        <View style={styles.container}>
            {renderHeader()}
            {renderCategories()}
            {renderLocations()}
            {renderSubCategories()}
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        catData: state.categories
    }
}

export default connect(mapStateToProps, { setCategories, setSubCategories })(HomeScreen);