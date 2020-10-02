import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';


const SampleComponent = () => {
    return (
      <View>
        <View style={{ width: 80, height: 80, backgroundColor: 'blue' }} />
        <Text>wahyu</Text>
        <Text>ari</Text>
        <Text>nugroho</Text>
        <BoxGreen />
        <Profile />
        <Wahyu />
        <Photo />
        <TextInput style={{ borderWidth: 1 }} />
      </View>
    )
  };
  
  
  const Wahyu = () => {
    return <Text>wahyu ari nugroho</Text>;
  };
  
  const Photo = () => {
    return (
      <Image
        source={{ uri: 'https://placeimg.com/100/100/tech' }}
        style={{ width: 100, height: 100 }}
      />
    )
  };
  
  class BoxGreen extends Component {
    render(){
      return <Text>ini component dari class</Text>;
    }
  }
  
  class Profile extends Component {
    render(){
      return (
        <View>
      <Image source={{uri: 'https://placeimg.com/100/100/animals'}}
      style={{width: 100, height: 100, borderRadius: 50}} />
      <Text>ini hewan</Text>
        </View>
  
      );
    }
  }

  export default SampleComponent;