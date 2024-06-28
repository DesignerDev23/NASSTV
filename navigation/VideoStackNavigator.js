// VideoStackNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AllVideosScreen from '../screens/AllVideosScreen';
import VideoScreen from '../screens/VideoScreen';

const Stack = createStackNavigator();

const VideoStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="AllVideos" component={AllVideosScreen} />
    <Stack.Screen name="Video" component={VideoScreen} />
  </Stack.Navigator>
);

export default VideoStackNavigator;
