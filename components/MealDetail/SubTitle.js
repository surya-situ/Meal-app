import { View, Text, StyleSheet } from "react-native";

function SubTitle ({children}) {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}> {children} </Text>
        </View>

    )
}

export default SubTitle;

const styles = StyleSheet.create({
    subTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 4,
        padding: 6,
        textAlign: 'center',
    },
    subTitleContainer: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2
    }
})