import React, {useState, useEffect}  from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, Image} from 'react-native';
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
    

    <ScrollView>
{/*       
 {
<FlatList style={{flex:1}}
 data={userDocument}
 keyExtractor={({id}, index)=>id}
 renderItem={({item})=>{

        
        return(
     */}
      
          <View style ={styles.sliderContainer}> 
       <View style = {styles.card}>
       <View style={styles.cardImgWrapper}>
       {/* <Image   source={{ uri: item.urlToImage }} 
       resizeMode='cover' style={styles.cardImg}/>  */}
     </View>
       <View style = {styles.cardInfo}>
      <Text style={styles.cardTitle}>source</Text>
      <Text style={styles.cardTitle}>author</Text>
       <Text style= {styles.cardDetails}>title</Text>
       <Text style= {styles.time}>time</Text>
       </View>
       </View>
       </View>
          {/* )

      }
    
 } */}

{/* /> */}



 

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
    Title:{
      fontSize:20,
      color:'#666',
      fontWeight:'bold'
    },
    cardDetails:{
      fontSize:12,
      color:'grey',
    },
    time:{
        fontSize:10,
        color:'grey',
        alignItems:'flex-end'
    },
   
});