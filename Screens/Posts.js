import React, {useState, useEffect}  from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';

const URL = 'http://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=378c8ec60f864f2f839fd9499e69b4ce';
const Posts =({navigation})=>{

    const [data, setData]=useState([]);


    // fetchin API data

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

data={data}
 renderItem={({item})=>{

    const newURL = item.author+item.publishedAt
    var date = new Date(); 

    
    // pushing data to firestore
    const pushHistory=()=>{


      const usersRef = firestore().collection('Posts').doc(newURL)
      // checks if the data alredy exists in firestore it updates it if not it sets new data
      usersRef.get()
        .then((docSnapshot) => {
          if (docSnapshot.exists) {
            usersRef.onSnapshot((doc) => {
              usersRef.update({PostDate:date})
            });
          } else {
            usersRef.set({
              postIMG:item.urlToImage,
              postTitle:item.title,
              PostAuthor:item.author,
              PostDate:date,
              PostContent:item.content,
              postSource:item.source.name,
              PostURL:item.url,
            }).then(() => {
              navigation.navigate("SinglePost", {
                  postIMG:item.urlToImage,
                  postTitle:item.title,
                  PostAuthor:item.author,
                  PostDate:item.publishedAt,
                  PostContent:item.content,
                  postSource:item.source.name,
                  PostURL:item.url,
                  FBDB:newURL
                })
            });
          }
          
      });

         }

         
    return(
        <View style ={styles.sliderContainer}> 
        <TouchableOpacity onPress={()=>{pushHistory()}}>
     <View style = {styles.card}>
     <View style={styles.cardImgWrapper}>
       <Image   source={{ uri: item.urlToImage }} 
       resizeMode='cover' style={styles.cardImg}/> 
     </View>
     <View style = {styles.cardInfo}>
    <Text numberOfLines={1} style={styles.cardTitle}>{item.author}</Text>
       <Text numberOfLines={2} style= {styles.cardDetails}>{item.title}</Text>
       <Text numberOfLines={1} style= {styles.time}>{moment(item.publishedAt).format('yyyy')}</Text>

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

export default Posts;

const styles= StyleSheet.create({


    container:{
        flex:1,
        
    },
    sliderContainer:{
      height:120,
      width:'90%',
      marginTop:2,
      justifyContent:'center',
      alignSelf:'center',
      borderRadius:8,
    },
    card:{
      height:100,
      flexDirection:'row',
      shadowColor:'gray',
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
