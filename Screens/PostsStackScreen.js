import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Posts from './Posts';
import SinglePost from './SinglePost';


const PostsStack = createStackNavigator();

function PostsStackScreen() {
  return (
    <PostsStack.Navigator>
      <PostsStack.Screen name="Posts" component={Posts} />
      <PostsStack.Screen name="SinglePost" component={SinglePost} />
    </PostsStack.Navigator>
  );
}

export default PostsStackScreen;
