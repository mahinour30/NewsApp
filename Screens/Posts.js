import React, {useState, useEffect}  from 'react';
import {View, Text, Button} from 'react-native';

const Posts =({navigation})=>{

  return(
    <View>
        <Button
        title='Single Post'
        onPress={()=>{navigation.navigate('SinglePost')}}/>
    </View>
  )
}

export default Posts;
