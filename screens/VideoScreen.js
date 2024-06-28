// VideoScreen.js

import React from 'react';
import { WebView } from 'react-native-webview';

const VideoScreen = ({ route }) => {
  const { videoId } = route.params;

  return (
    <WebView
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      allowsFullscreenVideo={true}
      source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
    />
  );
};

export default VideoScreen;
