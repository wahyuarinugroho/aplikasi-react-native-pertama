import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native'

const CallAPIVanilla = () => {
    const [dataUser, setDataUser] = useState({
        avatar: '',
        email: '',
        first_name: '',
        last_name: '',

    })

    const [dataJob, setDatajob] = useState({
        name: '',
        job: '',
    })

    useEffect(() => {
        // call API Method GEt
        // fetch('https://reqres.in/api/users/2')
        // .then(response => response.json())
        // .then(json => console.log(json))

        // call API Method POST
        // const dataForAPI = {
        //     name: "morpheus",
        //     job: "leader"
        // }

        // console.log('data object:', dataForAPI);
        // console.log('data stringify:', JSON.stringify(dataForAPI));
        // fetch('https://reqres.in/api/users', {
        //     method: 'POST',
        //     headers: {
        //             'Content-Type': 'aplication/json'  
        //     },
        //     body: JSON.stringify(dataForAPI)
        // })
        // .then(response => response.json())
        // .then(json => {
        //     console.log('post response: ',json)
        // })
    },
     []);

     const getData = () => {
        fetch('https://reqres.in/api/users/2')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setDataUser(json.data)
        })
    }

    const postData = () => {
       const dataForAPI = {
            name: "morpheus",
            job: "leader"
        }

        //  console.log('data object:', dataForAPI);
        // console.log('data stringify:', JSON.stringify(dataForAPI));
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                    'Content-Type': 'aplication/json'  
            },
            body: JSON.stringify(dataForAPI)
        })
        .then(response => response.json())
        .then(json => {
            console.log('post response: ', json)
            setDatajob(json)
        })

    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>call API dengan VanillaJS</Text>
            <Button title="GET DATA" onPress={getData} />
            <Text>Response GET DATA</Text>
            <Image source={{uri: dataUser.avatar}} style={styles.avatar}/>
            <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
            <Text>{`${dataUser.email}`}</Text>
            <View style={styles.line} />
            <Button title="POST DATA" onPress={postData} />
            <Text>Response POST DATA</Text>
            <Text>{dataJob.name}</Text>
            <Text>{dataJob.job}</Text>

        </View>
    )
}

export default CallAPIVanilla

const styles = StyleSheet.create({
    container : {padding: 20},
    textTitle : {textAlign: 'center'},
    line: {height: 2, backgroundColor: 'black', marginVertical: 20},
    avatar: {width: 100, height: 100, borderRadius: 100 }
});
