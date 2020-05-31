import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../constants/colors';
import { fontSize } from '../constants/fontSize';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16
    },  
    listView: {
        paddingVertical: 20,
        borderBottomWidth: 0.5,
        borderColor: colors.BORDER_COLOR,
        justifyContent: 'center'
    },
    listItem: {
        height: 55,
        justifyContent: 'center',
        fontSize: fontSize.title,
    },
    listBranchItem: {
        height: 55,
        justifyContent: 'center',
        fontSize: fontSize.subTitle,
        marginLeft: 15
    },
    itemTxt: {
        color: colors.THEME_TEXT_COLOR
    },
    panelHolder: {
        paddingVertical: 25,
        borderTopWidth: 0.5,
        borderColor: colors.BORDER_COLOR,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    panelBtnTxt: {
        color: colors.THEME_TEXT_COLOR,
        fontSize: fontSize.bigTitle
    },
    panelTxt: {
        textAlign: 'center',
        fontSize: 18,
        color: colors.THEME_TEXT_COLOR,
        height: 50
    },
    searchBar: {
        marginVertical: 16,
        height: 44,
        borderWidth: 0.5,
        borderColor: colors.BORDER_COLOR,
        borderRadius: 8,
        padding: 10,
        color: colors.THEME_TEXT_COLOR,
        width: width - 64
    },
    icon: {
        width: 12,
        height: 12
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    closeIcon: {
        width: 16,
        height: 16
    }
});