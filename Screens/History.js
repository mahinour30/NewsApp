import React, {useState, useEffect}  from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';

const History =({navigation})=>{

  const [data, setData]=useState([]);

  const getData = async()=>{
    const userDocument = await firestore()
    .collection('Posts')
    .doc('UJQj1J51IafE3u75eU9k')
    .get()
    setData(userDocument._data)
  }

  getData()
  return(
    

    <ScrollView>
      
          <View style ={styles.sliderContainer}> 
       <View style = {styles.card}>
       <View style={styles.cardImgWrapper}>
       <Image   source={{ uri: data.postIMG }} 
       resizeMode='cover' style={styles.cardImg}/> 
     </View>
       <View style = {styles.cardInfo}>
      <Text style={styles.cardTitle}> headline " {data.postTitle} " viewed at {moment(data.PostDate).calendar()}</Text>
       </View>
       </View>
       </View>
  
    </ScrollView>

  )
}

export default History;

const styles= StyleSheet.create({


    container:{
        flex:1,
        
    },
    sliderContainer:{
      height:200,
      width:'90%',
      marginTop:2,
      justifyContent:'center',
      alignSelf:'center',
      borderRadius:8,
    },
    card:{
      height:170,
      flexDirection:'row',
      shadowColor:'gray',
      shadowOffset:{width:0, height:1},
      shadowOpacity:0.8,
      shadowRadius:2,
      elevation:5,
    },cardImgWrapper:{
      flex:1,
    },
    cardImg:{
      height:'100%',
      width:'100%',
      alignSelf:'center',
      borderRadius:8,
      borderBottomRightRadius:0,
      borderTopRightRadius:0,
    },
    cardInfo:{
      flex:1,
      padding:10,
      borderColor:'gray',
      borderWidth:1,
      borderLeftWidth:0,
      borderBottomRightRadius:8,
      borderTopRightRadius:8,
      backgroundColor:'white',
    },
    cardTitle:{
      fontWeight:'bold',
    }, 
   
});