import React, {useState, useEffect}  from 'react';
import {View, Text, Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const History =({navigation})=>{


  const getData = async()=>{
    const userDocument = await firestore()
    .collection('Posts')
    .doc('UJQj1J51IafE3u75eU9k')
    .get()
    console.log(userDocument)
  }

  return(
    <View>
        <Button
        onPress={()=>{getData()}}
        title='History'/>
    </View>
  )
}

export default History;
