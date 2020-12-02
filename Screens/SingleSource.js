import React, {useState, useEffect}  from 'react';
import {View, Text, Button} from 'react-native';

const SingleSource =({navigation})=>{

  return(
    <View>
        <Button
        title='Sources'
        onPress={()=>{navigation.navigate('Sources')}}/>
    </View>
  )
}

export default SingleSource;
