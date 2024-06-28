import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PostStackNavigator from './PostStackNavigator';
import VideoStackNavigator from './VideoStackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Example, adjust based on your icon library

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Posts') {
          iconName = focused ? 'newspaper' : 'newspaper-outline';
        } else if (route.name === 'Videos') {
          iconName = focused ? 'videocam' : 'videocam-outline';
        }

        // You can return any component here based on your icon library
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#00923F',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Posts" component={PostStackNavigator} />
    <Tab.Screen name="Videos" component={VideoStackNavigator} />
  </Tab.Navigator>
);

export default BottomTabNavigator;
