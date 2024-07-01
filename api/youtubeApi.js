import axios from 'axios';

const API_KEY = 'AIzaSyDVwj8llUAJmkkzu4sOMUuUL14L2JLrF4M';

export const getYouTubeVideos = async (channelId) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`
    );
    const videos = await Promise.all(response.data.items.map(async (item) => {
      const videoId = item.id.videoId;
      const videoDetailsResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoId}&part=statistics`
      );
      const videoStatistics = videoDetailsResponse.data.items[0].statistics;
      return {
        id: videoId,
        title: item.snippet.title,
        featuredImage: item.snippet.thumbnails.default.url,
        publishedAt: item.snippet.publishedAt,
        commentCount: 0,
        totalViews: videoStatistics.viewCount,
      };
    }));
    return videos;
  } catch (error) {
    throw new Error('Error fetching YouTube videos: ' + (error.message || 'Unknown error'));
  }
};

export const getYouTubeVideoDetails = async (videoId) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoId}&part=snippet,statistics`
    );
    const videoData = response.data.items[0];
    return {
      id: videoId,
      title: videoData.snippet.title,
      description: videoData.snippet.description,
      publishedAt: videoData.snippet.publishedAt,
      totalViews: videoData.statistics.viewCount,
      commentCount: videoData.statistics.commentCount,
      featuredImage: videoData.snippet.thumbnails.default.url,
    };
  } catch (error) {
    throw new Error('Error fetching YouTube video details: ' + (error.message || 'Unknown error'));
  }
};

export const getRelatedVideos = async (videoId) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&relatedToVideoId=${videoId}&part=snippet&type=video&maxResults=10`
    );
    const relatedVideos = await Promise.all(response.data.items.map(async (item) => {
      const relatedVideoId = item.id.videoId;
      const videoDetailsResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${relatedVideoId}&part=statistics`
      );
      const videoStatistics = videoDetailsResponse.data.items[0].statistics;
      return {
        id: relatedVideoId,
        title: item.snippet.title,
        featuredImage: item.snippet.thumbnails.default.url,
        publishedAt: item.snippet.publishedAt,
        commentCount: 0,
        totalViews: videoStatistics.viewCount,
      };
    }));
    return relatedVideos;
  } catch (error) {
    throw new Error('Error fetching related videos: ' + (error.message || 'Unknown error'));
  }
};
