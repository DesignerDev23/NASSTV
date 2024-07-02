import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Share, Alert, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import { AntDesign, Feather, FontAwesome6 } from '@expo/vector-icons';
import { getYouTubeVideoDetails } from '../api/youtubeApi';
import VideoList from '../components/VideoList';
import Loader from '../components/Loader';
import moment from 'moment'; // Import moment library for date formatting
import * as FileSystem from 'expo-file-system';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const VideoScreen = ({ route }) => {
  const { videoId } = route.params;
  const [videoDetails, setVideoDetails] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const videoHeight = 300; // Height of the video container
  const navigation = useNavigation(); // Initialize useNavigation hook

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
      <StatusBar barStyle="light-content" backgroundColor="#fff" /> 
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="#000" />
        </TouchableOpacity>
      </View>
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
          <View style={styles.details}>
            <Text style={styles.detailText}>
              {videoDetails.totalViews} Views | {moment(videoDetails.publishedAt).fromNow()}
            </Text>
            <TouchableOpacity onPress={handleShare} style={styles.actionButton}>
              <FontAwesome6 name="share-from-square" size={14} color="#fff" />
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 5,
    top: 5,
  },
  videoContainer: {
    position: 'absolute',
    top: 50, // Adjusted to account for the header
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
    marginLeft: 10,
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
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  detailText: {
    fontSize: 12,
    color: '#888',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 3,
    paddingVertical: 9,
    borderRadius: 20,
    right: 20,
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
