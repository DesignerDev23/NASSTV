import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ArticleScreen from '../screens/ArticleScreen';
import VideoScreen from '../screens/VideoScreen';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Article" component={ArticleScreen} />
    <Stack.Screen name="Video" component={VideoScreen} />
  </Stack.Navigator>
);

export default StackNavigator;
