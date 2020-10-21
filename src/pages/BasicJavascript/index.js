import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BasicJavascript = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Materi basic javascript di RN</Text>
        </View>
    )
}

export default BasicJavascript

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    textTitle: {
        textAlign: 'center',
        fontSize: 20
        
    },
});
