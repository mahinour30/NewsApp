import React, {useState, useEffect}  from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';

const History =({route})=>{
  

  const [isLoading, setIsLoading] = useState(false);
  const [lastDoc, setLastDoc] = useState(null);
  const [posts, setPosts] = useState([]);

  // retriving all the documents in the firestore collection

  const PostsRef = firestore().collection('Posts');

  
  useEffect(()=>{
    getPosts();
  }, []);



  getPosts = async()=>{
    setIsLoading(true);


    // getting the documents orderd by the time it was clicked

    
    const snapshot = await PostsRef.orderBy('PostDate').get();

    if (!snapshot.empty){
      let newPosts = [];

      setLastDoc(snapshot.docs[snapshot.docs.length -1]);

      for (let i=0; i<snapshot.docs.length; i++){
        newPosts.push(snapshot.docs[i].data());
      }

      setPosts(newPosts);
    } else {
      setLastDoc(null);
    }
    setIsLoading(false);
  }

  //pushing the data into the flatlist

    renderList = ({postTitle,PostAuthor,PostDate,postIMG,postSource})=>{

      return(
        <View style ={{width:'100%', flexDirection:'column', paddingHorizontal:10,marginBottom:20}}>
          <View style ={styles.sliderContainer}> 
      <View style = {styles.card}>
      <View style={styles.cardImgWrapper}>
      <Image   source={{ uri: postIMG }} 
      resizeMode='cover' style={styles.cardImg}/> 
    </View>
      <View style = {styles.cardInfo}>
     <Text numberOfLines={4} style={styles.cardTitle}>headline " {postTitle} "</Text>
     <Text numberOfLines={1} style={{fontSize:12, fontWeight:'bold'}}>by {PostAuthor}</Text>
     <Text numberOfLines={1} style={{fontSize:12}}>from {postSource}</Text>
     <Text numberOfLines={1} style={{fontSize:11, marginTop:40}}>viewed at {moment(PostDate).calendar()}</Text>
        {/* the date is accurate on firestore but forsome reason it doesn't get retrieved accurately */}
      </View>
      </View>
      </View>
        </View>
      )
    }

  return(
    

    <ScrollView>
      <FlatList
      data ={posts}
      renderItem={({item})=>renderList(item)}
      />
    </ScrollView>

  )
}

export default History;

const styles= StyleSheet.create({


    container:{
        flex:1,
        
    },
    sliderContainer:{
      height:220,
      width:'90%',
      marginTop:2,
      justifyContent:'center',
      alignSelf:'center',
      borderRadius:8,
    },
    card:{
      height:190,
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