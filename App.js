import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import about from './component/about';
import insert from './component/insert';

const Stack = createNativeStackNavigator();


function MyStack() {
  return (   
      <Stack.Navigator initialRouteName="aboutss" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="aboutss" component={about} />
        <Stack.Screen name="insertss" component={insert} />
      </Stack.Navigator>
    
  );
}



 

export default class App extends Component {
  render() {
    return (
     
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}



// npm install @react-navigation/native
// expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/native-stack
