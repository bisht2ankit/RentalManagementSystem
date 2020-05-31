import {StyleSheet} from 'react-native';
import { colors } from '../constants/colors';
import { fontSize } from '../constants/fontSize';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.APP_THEME_COLOR,
        marginHorizontal: 16
    },
    flexContainer: {
        flex: 1,
        backgroundColor: colors.APP_THEME_COLOR,
    },
    appBanner: {
        width: '100%',
        height: '40%'
    },
    header: {
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: colors.BORDER_COLOR,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50    
    },
    boldTxt: {
        fontSize: fontSize.bigTitle,
        fontWeight : 'bold',
        color: colors.THEME_TEXT_COLOR
    },
    icon: {
        width: 16,
        height: 16,
        marginLeft: 10,
        marginTop: 2
    },
    heading: {
        fontSize: fontSize.bigTitle,
        fontWeight : 'bold',
        color: colors.THEME_TEXT_COLOR,
        textAlign: 'center',
        marginTop: '50%'
    },
    subtitle: {
        fontSize: fontSize.title,
        fontWeight : 'bold',
        color: colors.THEME_TEXT_COLOR,
        textAlign: 'center',
        marginTop: 20
    }
});