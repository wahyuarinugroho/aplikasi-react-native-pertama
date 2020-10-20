import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Cart from '../../components/Cart'

const Communication = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>materi komunikasi antar component</Text>
            <Cart />
        </View>
    )
};

export default Communication

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign: 'center'},
});
