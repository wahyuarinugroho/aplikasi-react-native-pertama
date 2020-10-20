import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'

const Story = (props) => {
    return (
        <View style = {{alignItems:'center', marginRight: 20}}>
            <Image 
                source={{
                        uri: props.gambar,
                }}
                style={{width: 70, height: 70, borderRadius: 70 / 2}}
            />
            <Text style = {{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
        </View>
        
    );   
};

const PropsDinamis = () => {
    return (
        <View>
            <Text>materi component dinamis dengan this.props</Text>
            <ScrollView horizontal>
            <View style = {{flexDirection: 'row'}}>
            <Story 
                judul="youtube channel" 
                gambar="https://placeimg.com/100/100/animals" />
            <Story 
                judul="kelas online" 
                gambar="https://placeimg.com/100/100/arch" />
            <Story 
                judul="shoot" 
                gambar="https://placeimg.com/100/100/nature" />
            <Story 
                judul="foods" 
                gambar="https://placeimg.com/100/100/people" />
            <Story 
                judul="traveling" 
                gambar="https://placeimg.com/100/100/tech" />
            <Story 
                judul="hobby" 
                gambar="https://placeimg.com/100/100/tech" />
            </View>
            </ScrollView>
        </View>
    )
}

export default PropsDinamis

const styles = StyleSheet.create({})
