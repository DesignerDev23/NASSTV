// PostStackNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AllPostScreen from '../screens/AllPostScreen';
import ArticleScreen from '../screens/ArticleScreen';

const Stack = createStackNavigator();

const PostStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="AllPosts" component={AllPostScreen} />
    <Stack.Screen name="Article" component={ArticleScreen} />
  </Stack.Navigator>
);

export default PostStackNavigator;
