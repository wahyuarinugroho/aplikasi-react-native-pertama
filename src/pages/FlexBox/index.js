import React, { Component } from "react";
import { Image, Text, View } from "react-native";

// class FlexBox extends Component {
//     constructor(props){
//         super(props);
//         console.log('==> constructor');
//         this.state={
//             subscriber: 300,
//         }
//     }

//     componentDidMount(){
//         console.log('component did mount');
//         setTimeout(() => {
//             this.setState({
//                 subscriber: 500,
//             });
//         }, 2000);
//     }

//     componentDidUpdate(){
//         console.log('==> component did update');
//     }

//     componentWillUnmount(){
//         console.log('==> component wil unmount');
//     }

//     render(){
//         console.log('==> render');
//         return (
//             <View>
//             <View style={{
//                 flexDirection: 'row',
//                 backgroundColor: '#c8d6e5',
//                 alignItems: 'flex-end'
//                 }}>
//                 <View style={{backgroundColor: '#ee5253', flex: 1, height: 100}}/>
//                 <View style={{backgroundColor: '#feca57', flex: 1, height: 100}}/>
//                 <View style={{backgroundColor: '#1dd1a1', flex: 1, height: 100}}/>
//                 <View style={{backgroundColor: '#5f27cd', flex: 1, height: 100}}/>
//             </View>
//             <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//                 <Text>beranda</Text>
//                 <Text>video</Text>
//                 <Text>playlist</Text>
//                 <Text>channel</Text>
//             </View>
//             <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
//                 <Image source={{
//                     uri: 
//                     'https://placeimg.com/100/100/people/sepia'
//                 }} 
//                 style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
//                 />
//                 <View>
//                 <Text style={{fontSize: 20, fontWeight: 'bold'}}>wahyu ari nugroho</Text>
//                 <Text>{this.state.subscriber} ribu subscriber</Text>
//                 </View>
//             </View>
//             </View>

            
//         ) 
//     }
// }


const FlexBox = () => {
    return(
        <View>
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#c8d6e5',
                alignItems: 'flex-end'
                }}>
                <View style={{backgroundColor: '#ee5253', flex: 1, height: 100}}/>
                <View style={{backgroundColor: '#feca57', flex: 1, height: 100}}/>
                <View style={{backgroundColor: '#1dd1a1', flex: 1, height: 100}}/>
                <View style={{backgroundColor: '#5f27cd', flex: 1, height: 100}}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text>beranda</Text>
                <Text>video</Text>
                <Text>playlist</Text>
                <Text>channel</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <Image source={{
                    uri: 
                    'https://placeimg.com/100/100/people/sepia'
                }} 
                style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
                />
                <View>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>wahyu ari nugroho</Text>
                <Text>100 ribu subscriber</Text>
                </View>
            </View>
        </View>
    )
};

export default  FlexBox;