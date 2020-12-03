import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Sources from './Sources';
import SingleSource from './SingleSource';


const SourcesStack = createStackNavigator();

function SourcesStackScreen() {
  return (
    <SourcesStack.Navigator>
      <SourcesStack.Screen name="Sources" component={Sources} />
      <SourcesStack.Screen name="SingleSource" component={SingleSource} />
    </SourcesStack.Navigator>
  );
}

export default SourcesStackScreen;
