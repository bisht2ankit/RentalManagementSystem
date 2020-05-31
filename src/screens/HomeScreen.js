import React, { useState } from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { styles } from './styles';
import { Locations, Categories, SubCategories } from '../components';
import { constants } from '../constants/strings';
import downIcon from '../assets/downIcon.png';
import { connect } from 'react-redux';
import { setCategories, setSubCategories, setLocation, clearLocation, clearCategories } from '../actions';
import globalStyles from '../constants/globalStyles';

const HomeScreen = (props) => {
    const { catData, setCategories, setSubCategories, setLocation, location, clearLocation, clearCategories } = props;
    const { categories, subCategories } = catData;
    const [isLocVisible, setIsLocVisible] = useState(false);
    const [isSubCatVisible, setIsSubCatVisible] = useState(false);

    const storeCategories = (categories) => {
        setCategories(categories);
        setIsLocVisible(false);
    }

    const storeSubCategories = (subCategories) => {
        setSubCategories(subCategories);
        setIsSubCatVisible(true);
    }

    const storeLocation = (location) => {
        setLocation(location);
    }

    const handleReset = () => {
        clearLocation();
        clearCategories();
    }
    
    const renderHeader = () => {
        return (
            <View style={[globalStyles.spaceBetweenRow, styles.border]}>
            <TouchableOpacity style={styles.header} onPress={() => setIsLocVisible(true)}>
                <Text style={styles.boldTxt}>{location ? location : constants.location.selectLocation}</Text>
                <Image source={downIcon} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleReset}>
            <Text style={styles.btnTxt}>{constants.landing.reset}</Text>
            </TouchableOpacity>
            </View>
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
        return <Locations 
            visible={isLocVisible} 
            closeModal={() => setIsLocVisible(false)} 
            setCategories={storeCategories} 
            setLocation={storeLocation}
            />
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
        catData: state.categories,
        location: state.location
    }
}

export default connect(mapStateToProps, { setCategories, setSubCategories, setLocation, clearLocation, clearCategories })(HomeScreen);