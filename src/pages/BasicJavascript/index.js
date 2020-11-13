import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BasicJavascript = () => {
    
    //data primitive
    const nama = 'wahyu'; //string
    let usia = 29;  //number
    const apakahLakiLaki = true;  //bolean

    //data complex
    const hewanPeliharaan = {
        nama: 'push',
        jenis: 'kucing',
        usia: 2,
        apakahHewanLokal: true,
        warna: 'kuning',
        orangTua: {
            jantan: 'kaisar',
            betina: 'quin',
        },
    }; //object

    const sapaOrang = (name, age) => {
        return console.log(`hello ${name} usia anda ${age}`);  
    }; //Function

sapaOrang('wahyu', 29);

const namaOrang = ['wahyu', 'ari', 'nugroho']; //array
typeof namaOrang; //hasilnya object

// if (hewanPeliharaan.nama === 'push'){
//     console.log('hello push')
// } else {
//     console.log('hewan siapa ini?');
// }

const sapaHewan = objectHewan => {
    let hasilSapa ='';
    if (objectHewan.nama === 'push'){
        hasilSapa = 'hallo push, apa kabar';
    } else {
        hasilSapa = 'ini hewan siapa?';
    }
    return hasilSapa;
};
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>
                Materi basic javascript di RN
            </Text>
            <Text>Name: {nama}</Text>
            <Text>Age: {usia}</Text>
            <Text>{sapaHewan(hewanPeliharaan)}</Text>
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
        fontSize: 20,
    },
});
