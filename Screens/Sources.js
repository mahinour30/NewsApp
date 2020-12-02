import React, {useState, useEffect}  from 'react';
import {View, Text, Button} from 'react-native';

const Sources =({navigation})=>{

  return(
    <View>
        <Button
        title='Single Source'
        onPress={()=>{navigation.navigate('SingleSource')}}/>
    </View>
  )
}

export default Sources;
