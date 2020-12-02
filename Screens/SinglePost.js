import React, {useState, useEffect}  from 'react';
import {View, Text, Button} from 'react-native';

const SinglePost =({navigation})=>{

  return(
    <View>
        <Button
        title='Posts'
        onPress={()=>{navigation.navigate('Posts')}}/>
    </View>
  )
}

export default SinglePost;
