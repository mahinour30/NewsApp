import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions} from 'react-native';

const SinglePost =({route})=>{

  const { 
    postIMG,
    postTitle,
    PostAuthor,
    PostDate,
    PostContent,
    postSource,
    PostURL,
  } = route.params;

  return(
    <ScrollView style={styles.container}>
      
         <View>
        <Image
              source={{ uri: postIMG }}
              style={styles.pic}
              resizeMode='cover'
            />
        </View>
        <View style={{borderBottomWidth:1, marginBottom:12}}></View>
         <View style={styles.space}>
          <Text style={styles.Title}>
            {postTitle}
          </Text>
        </View>
         <View style={styles.space}>
          <Text style={styles.Author}>
            by {PostAuthor}
          </Text>
        </View>
         <View style={styles.space}>
          <Text style={styles.Time}>
            {PostDate}
          </Text>
        </View>
         <View style={styles.space}>
          <Text style={styles.Content}>
            {PostContent}
          </Text>
        </View>
         <View style={{alignItems:'center', marginTop:20, marginBottom:10}}>
          <TouchableOpacity>
          <Text>
            {postSource}
          </Text>
          </TouchableOpacity>
        </View>

    </ScrollView>
  )

}

export default SinglePost;
const {height, width}=Dimensions.get("window");

const styles= StyleSheet.create({


  container:{
      flex:1,
  },
  pic:{
    height:height*.50,
    width:width,
  },
  Title:{
    fontSize:20,
    color:'#666',
    fontWeight:'bold'
  },
  Author:{
    fontSize:15,
    color:'#333'
  },
  Time:{
    fontSize:12,
    color:'#333'
  },
  Content:{
    fontSize:30,
    color:'#333'
  },
  space:{
    margin:8
  }
});
