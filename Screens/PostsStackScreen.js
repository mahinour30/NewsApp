import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Posts from './Posts';
import SinglePost from './SinglePost';


const PostsStack = createStackNavigator();
// creating stack navigaton for single posts to navigate it through the tab navigator

function PostsStackScreen() {
  return (
    <PostsStack.Navigator>
      <PostsStack.Screen name="Posts" component={Posts} />
      <PostsStack.Screen name="SinglePost" component={SinglePost} />
    </PostsStack.Navigator>
  );
}

export default PostsStackScreen;
