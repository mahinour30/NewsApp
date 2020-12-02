import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SinglePost from './SinglePost';
import SingleSource from './SingleSource';


const Stack = createStackNavigator();

const Navigation =()=>{
  return(
    <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen name="SinglePost" component={SinglePost} />
    <Stack.Screen name="SingleSource" component={SingleSource} />
   </Stack.Navigator>


    </NavigationContainer> 
  );
}


export default Navigation;



