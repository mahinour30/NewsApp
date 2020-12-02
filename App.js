import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Posts from './Screens/Posts';
import Sources from './Screens/Sources';
import History from './Screens/History';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App =()=>{
  return(
    <NavigationContainer>
   <Tab.Navigator>
    <Tab.Screen name="Posts" component={Posts} />
    <Tab.Screen name="Sources" component={Sources} />
    <Tab.Screen name="History" component={History} />
   </Tab.Navigator>


    </NavigationContainer> 
  );
}


export default App;



