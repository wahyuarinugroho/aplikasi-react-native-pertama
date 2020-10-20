import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import cart from '../../assets/icons/cart.png';

const Cart = (props) => {
    return (
        <View>
            <View style={styles.cartWrapper}>
            <Image source={cart} style={styles.iconCart} />
            <Text style={styles.notif}>{props.quantity}</Text>
            </View>
            <Text style={styles.text}>keranjang belanja anda</Text>
        </View>
        
    )
}

export default Cart

const styles = StyleSheet.create({
    wrapper: {
        padding: 20, 
        alignItems: 'center'
    },
    cartWrapper: {
        borderWidth: 1, 
        borderColor: '#4398D1', 
        width: 100, 
        height: 100,
        borderRadius: 100 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: 40
    },
    iconCart: {
        width: 50, 
        height:50
    },
    text: {
        fontSize: 12, 
        color: '#777777', 
        fontWeight: '700', 
        marginTop: 8
    },
    notif: {
        fontSize: 12, 
        color: 'white', 
        backgroundColor: '#6FCF97',
        padding: 4,
        borderRadius: 30,
        width: 24,
        height: 24, 
        position: 'absolute',
        top: 0,
        right: 0
    }
})
