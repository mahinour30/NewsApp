import React, {useState, useEffect}  from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment';


const URL = 'http://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=378c8ec60f864f2f839fd9499e69b4ce';
const Sources =({navigation})=>{

    const [data, setData]=useState([]);



    useEffect(()=>{
        fetch(URL)
        .then((response)=> response.json())
        .then((json)=> {
          setData(json.articles)
        })
        .catch((error) => Alert.alert('Error','Something IS Wrong!'))
      }, []);



  return(
    

    <ScrollView>
 {
     data != null &&

<FlatList style={{flex:1}}
//contentContainerStyle={{alignItems:"center"}}
 data={data}
 keyExtractor={({id}, index)=>id}
 renderItem={({item})=>{
    return(
        <View style ={styles.sliderContainer}> 
        <TouchableOpacity onPress={()=>navigation.navigate("SingleSource", {
            postSource:item.source.name,
          })}>
     <View style = {styles.card}>
     <View style = {styles.cardInfo}>
    <Text style={styles.cardTitle}>{item.source.name}</Text>

     </View>
     </View>
     </TouchableOpacity>
     </View>
        )
 }

 }
/>



 }

    </ScrollView>

  )
}

export default Sources;

const styles= StyleSheet.create({


    container:{
        flex:1,
        
    },
    sliderContainer:{
      height:60,
      width:'90%',
      marginTop:2,
      justifyContent:'center',
      alignSelf:'center',
      borderRadius:8,
    },
    card:{
      height:50,
      flexDirection:'row',
      shadowColor:'gray',
      shadowOffset:{width:0, height:1},
      shadowOpacity:0.8,
      shadowRadius:2,
      elevation:5,
    },
    cardInfo:{
      flex:1,
      padding:10,
      borderColor:'gray',
      borderWidth:1,
      borderRadius:8,
      backgroundColor:'white',
    },
    cardTitle:{
      fontWeight:'bold',
    },
    
   
});
