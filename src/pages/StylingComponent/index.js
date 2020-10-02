import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import laptop from '../../assets/image/laptop.jpg';

const StylingComponent = () => {
    return (
      <View>
        <Text style={styles.text }>Styling Component</Text>
        <View style={{ 
          width: 100, 
          height: 100, 
          backgroundColor: '#0abde3', 
          borderWidth: 2,
          borderColor: '#5f27cd',
          marginTop: 20,
          marginLeft: 20
          }} />
          <View style={{
            padding: 12, 
            backgroundColor: '#F2F2F2', 
            width: 212, 
            borderRadius: 8
            }}>
  
          <Image source={laptop} style={{
            width: 188, 
            height: 107, 
            borderRadius: 8
            }} />
          
          <Text style={{
            fontSize: 14, 
            fontWeight: 'bold', 
            marginTop: 16
            }}>
              NEW LAPTOP 2020
          </Text>
  
          <Text style={{
            fontSize: 12, 
            fontWeight: 'bold',
            color: '#F2994A', 
            marginTop: 16
            }}>
              25.000.000
          </Text>
  
          <Text style={{
            fontSize: 12, 
            fontWeight: '300',
            color: 'red', 
            marginTop: 12
            }}>
              JAKARTA
          </Text>
          </View>
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#10ac84',
      marginLeft: 20,
      marginTop: 40
    }
  })

  export default StylingComponent;