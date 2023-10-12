import { View, StyleSheet,Text } from "react-native"


function Header({title, type="header1"}) {

    if(type === 'header1'){
        return (
            <View>
                <Text style={styles.header1}>{title}</Text>
            </View>
        )
    }else if(type === 'header2'){
        return (
            <View>
                <Text style={styles.header2}>{title}</Text>
            </View>
        )
    } else if(type === 'header3'){
        return (
            <View>
                <Text style={styles.header3}>{title}</Text>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    header1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
        marginHorizontal: 20,
    },
    header2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
        marginHorizontal: 20,
    },
    header3: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
        marginHorizontal: 20,
    },

})



export default Header