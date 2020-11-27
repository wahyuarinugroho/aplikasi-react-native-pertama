import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native'

const Item = () => {
    return(
            <View style={styles.itemContainer}>
                <Image style={styles.avatar} src="" />
                <View style={styles.desc}>
                    <Text style={styles.descName}>Nama Lengkap</Text>
                    <Text style={styles.descEmail}>Email</Text>
                    <Text style={styles.descBidang}>Bidang</Text>
                </View>
                <Text style={styles.delete}>X</Text>
            </View>
    )
}

const LocalAPI = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>local API (JSON Server)</Text>
            <Text>masukan anggota coding anda</Text>
            <TextInput style={styles.input} placeholder="Nama Lengkap" />
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Bidang" />
            <Button title="Simpan" />
            <View style={styles.line} />
            <Item />
            <Item />
            <Item />
            

        </View>
    )
}

export default LocalAPI

const styles = StyleSheet.create({
    container : {padding: 20},
    textTitle : {textAlign: 'center'},
    line: {height: 2, backgroundColor: 'black', marginVertical: 20},
    avatar: {width: 80, height: 80, borderRadius: 80 },
    input: {borderWidth: 1, marginBottom: 12, borderRadius: 15, paddingHorizontal: 18},
    itemContainer: {flexDirection: 'row', marginBottom: 20},
    desc: {marginLeft: 18, flex: 1},
    descName: {fontSize: 20, fontWeight: 'bold'},
    descEmail: {fontSize: 16},
    descBidang: {fontSize: 12, marginTop: 8},
    delete: {fontSize: 20, fontWeight: "bold", color: 'red'}
})

