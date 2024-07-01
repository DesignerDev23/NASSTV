import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import * as Font from 'expo-font'; // Import Font from Expo

import Header from '../components/Header';
import Slider from '../components/Slider';
import VideoList from '../components/VideoList';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [fontLoaded, setFontLoaded] = useState(false);

  // Load custom font on component mount
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'poppin': require('../assets/fonts/Poppins-Bold.ttf'),
        'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'poppins-semibold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        // Add more fonts as needed
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  if (!fontLoaded) {
    return null; // Render loading component or null until font is loaded
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Header onSearch={handleSearch} />
      <Slider />
      <VideoList channelId="UCDGwg0flJkk3LNjd_6lQUjA" searchQuery={searchQuery} />

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'poppin',
  },
  
});

export default HomeScreen;
