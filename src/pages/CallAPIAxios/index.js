import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native'

const CallAPIAxios = () => {
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


     const getData = () => {
        Axios.get('https://reqres.in/api/users/3')
        .then(result => {
            setDataUser(result.data.data);
        })
        .catch(err => console.log('err: ', err));
    }

    const postData = () => {
       const dataForAPI = {
            name: "morpheus",
            job: "leader"
        }

        Axios.post('https://reqres.in/api/users', dataForAPI)
        .then(result => {
            setDatajob(result.data);
        })
        .catch(err => console.log('err: ', err))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>call API dengan Axios</Text>
            <Button title="GET DATA" onPress={getData} />
            <Text>Response GET DATA</Text>
            {dataUser.avatar.length > 0 && (
                <Image source={{uri: dataUser.avatar}} style={styles.avatar}/>
            )}
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

export default CallAPIAxios

const styles = StyleSheet.create({
    container : {padding: 20},
    textTitle : {textAlign: 'center'},
    line: {height: 2, backgroundColor: 'black', marginVertical: 20},
    avatar: {width: 100, height: 100, borderRadius: 100 }
});
