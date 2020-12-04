import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Sources from './Sources';
import SingleSource from './SingleSource';


const SourcesStack = createStackNavigator();

// creating stack navigaton for single sources to navigate it through the tab navigator

function SourcesStackScreen() {
  return (
    <SourcesStack.Navigator>
      <SourcesStack.Screen name="Sources" component={Sources} />
      <SourcesStack.Screen name="SingleSource" component={SingleSource} />
    </SourcesStack.Navigator>
  );
}

export default SourcesStackScreen;
