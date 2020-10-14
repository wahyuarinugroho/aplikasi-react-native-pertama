import React, { useEffect, useState } from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     SetIsShow(false)
  //   }, 6000) 
  // }, [])

  return (
    <View>
      <ScrollView>
      {/* <SampleComponent />
      <StylingComponent /> */}
      {isShow && <FlexBox />}
      {/* <Position /> */}
      </ScrollView>
    </View>
      
  )
};


export default App;