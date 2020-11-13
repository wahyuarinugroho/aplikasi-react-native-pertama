import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IllustrationMyApp from '../../assets/image/illustration_my_app.svg';

const index = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>material penggunaan file SVG di dalam RN OK</Text>
            <IllustrationMyApp width={244} height={125} />
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign: 'center'},
})
