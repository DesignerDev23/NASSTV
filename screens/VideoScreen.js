import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Share, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getYouTubeVideoDetails } from '../api/youtubeApi';
import VideoList from '../components/VideoList';
import { AntDesign, Feather } from '@expo/vector-icons';
import Loader from '../components/Loader';
import moment from 'moment'; // Import moment library for date formatting
import * as FileSystem from 'expo-file-system';

const VideoScreen = ({ route }) => {
  const { videoId } = route.params;
  const [videoDetails, setVideoDetails] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const videoHeight = 300; // Height of the video container

  useEffect(() => {
    fetchVideoDetails();
  }, [videoId]);

  const fetchVideoDetails = async () => {
    try {
      const videoData = await getYouTubeVideoDetails(videoId);
      setVideoDetails(videoData);
    } catch (error) {
      console.error('Error fetching video details:', error);
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const renderRelativeTime = (time) => {
    return moment(time).fromNow();
  };

  const handleDownload = async () => {
    try {
      const fileUri = `https://www.youtube.com/watch?v=${videoId}`;
      const downloadResumable = FileSystem.createDownloadResumable(
        fileUri,
        FileSystem.documentDirectory + 'video.mp4'
      );

      const { uri } = await downloadResumable.downloadAsync();

      if (uri) {
        const downloadPath = `${FileSystem.documentDirectory}video.mp4`;
        await FileSystem.moveAsync({
          from: uri,
          to: downloadPath,
        });
        Alert.alert('Download Complete', `File saved to ${downloadPath}`);
      }
    } catch (error) {
      console.error('Error downloading file:', error);
      Alert.alert('Download Error', 'Failed to download the file. Please try again.');
    }
  };
  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Check out this video: https://www.youtube.com/watch?v=${videoId}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type:', result.activityType);
        } else {
          console.log('Shared');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Dismissed');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  if (!videoDetails) {
    return <Loader />; // Loader component can be used here
  }

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <WebView
          style={{ width: screenWidth, height: videoHeight }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsFullscreenVideo={true}
          source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
        />
      </View>
      <ScrollView style={[styles.scrollContainer, { marginTop: videoHeight }]}>
        <View style={styles.detailsContainer}>
          <Text style={styles.videoTitle}>{videoDetails.title}</Text>
          <View style={styles.metaContainer}>
            <Text style={styles.metaText}>{videoDetails.totalViews} Views</Text>
            <Text style={styles.metaText}>{renderRelativeTime(videoDetails.publishedAt)}</Text>
          </View>
          <View style={styles.actionsContainer}>
            <TouchableOpacity onPress={handleLike} style={styles.actionButton}>
              <AntDesign name={isLiked ? 'like1' : 'like2'} size={19} color="#fff" />
              <Text style={styles.actionText}>{isLiked ? 'Liked' : 'Like'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDownload} style={styles.actionButton}>
              <Feather name="download" size={19} color="#fff" />
              <Text style={styles.actionText}>Download</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleShare} style={styles.actionButton}>
              <Feather name="send" size={19} color="#fff" />
              <Text style={styles.actionText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.relatedVideosContainer}>
          <Text style={styles.relatedVideosTitle}>More Videos</Text>
          <VideoList channelId="UCDGwg0flJkk3LNjd_6lQUjA" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  videoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    elevation: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    zIndex: 0,
  },
  detailsContainer: {
    padding: 15,
  },
  videoTitle: {
    fontSize: 18,
    fontFamily: 'poppin',
    marginBottom: 10,
    marginLeft: 14,
    color: '#00923F',
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  metaText: {
    fontSize: 12,
    color: '#888',
    fontFamily: 'poppins-regular',
    marginLeft: 14,
    marginRight: 14,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    gap: 5,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#00923F',
  },
  actionText: {
    marginLeft: 5,
    fontFamily: 'poppins-regular',
    fontSize: 12,
    color: '#fff',
  },
  relatedVideosContainer: {
    padding: 6,
  },
  relatedVideosTitle: {
    fontSize: 18,
    fontFamily: 'poppins-semibold',
    marginLeft: 18,
  },
});

export default VideoScreen;
