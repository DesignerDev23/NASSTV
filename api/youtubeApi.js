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
