import React, {useState, useEffect}  from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import moment from 'moment';

const PostsStack = createStackNavigator();

const URL = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=378c8ec60f864f2f839fd9499e69b4ce';
const Posts =({navigation})=>{

    const [isLoading, setLoading]=useState(true);
    const [data, setData]=useState([]);



    useEffect(()=>{
        fetch(URL)
        .then((response)=> response.json())
        .then((json)=> {
          setData(json.articles)
        })
        .catch((error) => Alert.alert('Error','Something IS Wrong!'))
        .finally(()=>{setLoading(false)
        });
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
        <TouchableOpacity onPress={()=>navigation.navigate("SinglePost", {
            postIMG:item.urlToImage,
            postTitle:item.title,
            PostAuthor:item.author,
            PostDate:item.publishedAt,
            PostContent:item.content,
            postSource:item.source.name,
            PostURL:item.url,
          })}>
     <View style = {styles.card}>
     <View style={styles.cardImgWrapper}>
       <Image   source={{ uri: item.urlToImage }} 
       resizeMode='cover' style={styles.cardImg}/> 
     </View>
     <View style = {styles.cardInfo}>
    <Text style={styles.cardTitle}>{item.author}</Text>
       <Text style= {styles.cardDetails}>{item.title}</Text>
       <Text style= {styles.time}>{moment(item.publishedAt).format('yyyy')}</Text>

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
      height:200,
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
