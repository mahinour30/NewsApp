import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsStackScreen from './Screens/PostsStackScreen';
import SourcesStackScreen from './Screens/SourcesStackScreen';
import History from './Screens/History';


const Tab = createBottomTabNavigator();

const App =()=>{
  return(

    // creating navigation container around the whole app and creating the tab navigators
    <NavigationContainer>
   <Tab.Navigator>
    <Tab.Screen name="Posts" component={PostsStackScreen} />
    <Tab.Screen name="Sources" component={SourcesStackScreen} />
    <Tab.Screen name="History" component={History} />
   </Tab.Navigator>


    </NavigationContainer> 
  );
}


export default App;



