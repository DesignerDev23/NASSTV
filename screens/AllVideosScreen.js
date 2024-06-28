// components/VideoList.js

import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { getYouTubeVideos } from '../api/youtubeApi'; // Update the path to your API file
import { useNavigation } from '@react-navigation/native';
import moment from 'moment'; // Import moment library for date formatting

const AllVideosScreen = () => {
  const navigation = useNavigation();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchYouTubeVideos();
  }, []);

  const fetchYouTubeVideos = async () => {
    try {
      const videosData = await getYouTubeVideos('UCDGwg0flJkk3LNjd_6lQUjA'); // Pass the channel ID to fetch videos
      setVideos(videosData);
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
    }
  };

  const navigateToVideo = (videoId) => {
    navigation.navigate('Video', { videoId });
  };

  const renderRelativeTime = (time) => {
    return moment(time).fromNow();
  };

  const renderVideoItem = ({ item }) => (
    <View>
      <TouchableOpacity onPress={() => navigateToVideo(item.id)} style={styles.videoContainer}>
        <Image source={{ uri: item.featuredImage }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.details}>
            {renderRelativeTime(item.publishedAt)} | {item.commentCount} Comments | {item.totalViews} Views
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.horizontalLine} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={renderVideoItem}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  flatListContainer: {
    paddingBottom: 10,
  },
  videoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  image: {
    width: 136,
    height: 79,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 16,
    paddingTop: 13,
    alignContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    height: 'auto',
    color: '#00923F',
  },
  details: {
    fontSize: 12,
    color: '#888',
    paddingRight: 25,
    lineHeight: 20,
  },
});

export default AllVideosScreen;
