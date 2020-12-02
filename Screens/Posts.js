import React, {useState, useEffect}  from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

const Posts =({navigation})=>{

  return(
    <ScrollView>
        <View style ={styles.sliderContainer}>
       <TouchableOpacity onPress={()=>{navigation.navigate('SinglePost')}}>
    <View style = {styles.card}>
    <View style={styles.cardImgWrapper}>
      <Image  source={require('./Cookies.jpg')} 
      resizeMode='cover' style={styles.cardImg}/> 
    </View>
    <View style = {styles.cardInfo}>
      <Text style={styles.cardTitle}>Title</Text>
      <Text style= {styles.cardDetails}>Details</Text>
    </View>
    </View>
    </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default Posts;

const styles= StyleSheet.create({


    container:{
        flex:1,
        
    },
    sliderContainer:{
      height:200,
      width:'90%',
      marginTop:10,
      justifyContent:'center',
      alignSelf:'center',
      borderRadius:8,
    },
    card:{
      height:100,
      marginVertical:10,
      flexDirection:'row',
      shadowColor:'pink',
      shadowOffset:{width:0, height:1},
      shadowOpacity:0.8,
      shadowRadius:2,
      elevation:5,
    },
    cardImgWrapper:{
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
      flex:2,
      padding:10,
      borderColor:'pink',
      borderWidth:1,
      borderLeftWidth:0,
      borderBottomRightRadius:8,
      borderTopRightRadius:8,
      backgroundColor:'white',
    },
    cardTitle:{
      fontWeight:'bold',
    },
    cardDetails:{
      fontSize:12,
      color:'grey',
    },
});
