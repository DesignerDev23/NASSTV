// Import necessary libraries
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { getPostById } from '../api/wpApi';
import HTML from 'react-native-render-html';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Loader from '../components/Loader';

// Define ArticleScreen component
const ArticleScreen = ({ route }) => {
  const { postId } = route.params;
  const [post, setPost] = useState(null);
  const [isLiked, setLiked] = useState(false);

  // Fetch post data on component mount
  useEffect(() => {
    fetchPost();
  }, []);

  // Fetch post data function
  const fetchPost = async () => {
    try {
      const postData = await getPostById(postId);
      setPost(postData);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  // Handle like button press
  const handleLike = () => {
    setLiked(!isLiked);
  };

  // Share on social media
  const shareOnTwitter = () => {
    if (!post) return;
    const message = `Check out this post: ${post.title}\n${post.link}`;
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(post.link)}&text=${encodeURIComponent(
      message
    )}`;
    Linking.openURL(url);
  };

  const shareOnTelegram = () => {
    if (!post) return;
    const message = `Check out this post: ${post.title}\n${post.link}`;
    const url = `https://t.me/share/url?url=${encodeURIComponent(post.link)}&text=${encodeURIComponent(
      message
    )}`;
    Linking.openURL(url);
  };

  const shareOnWhatsApp = () => {
    if (!post) return;
    const message = `Check out this post: ${post.title}\n${post.link}`;
    const imageUrl = post.featuredImage.node.sourceUrl;
    const url = `whatsapp://send?text=${encodeURIComponent(
      message
    )}&media=${encodeURIComponent(imageUrl)}`;
    Linking.openURL(url);
  };

  // Return JSX
  if (!post) {
    return <Loader />;
  }

  return (
    <ScrollView style={localStyles.container}>
      {/* Featured Image */}
      <Image source={{ uri: post.featuredImage.node.sourceUrl }} style={localStyles.featuredImage} />

      {/* Post Details */}
      <View style={localStyles.postContainer}>
        <Text style={localStyles.postTitle}>{post.title}</Text>

        {/* Categories */}
        {post.categories && (
          <View style={localStyles.categoriesContainer}>
            <Text style={localStyles.categoriesTitle}></Text>
            {post.categories.edges.map((category) => (
              <Text key={category.node.id} style={localStyles.category}>
                {category.node.name}
              </Text>
            ))}
          </View>
        )}

        {/* Time Posted */}
      </View>

      {/* Post Content */}
      <View style={localStyles.contentContainer}>
        <HTML
          source={{ html: `<div style="font-family: 'poppin';">${post.content}</div>` }}
          tagsStyles={{
            // You can still adjust other styles if needed
            p: {
              marginBottom: 3,
              fontSize: 14.5,
              fontFamily: 'poppins-semibold',
              lineHeight: 24,
              textAlign: 'justify',
            },
          }}
        />
      </View>

      {/* Like Button */}
      <TouchableOpacity
        style={[localStyles.likeButton, isLiked && localStyles.likedButton]}
        onPress={handleLike}
      >
        <FontAwesomeIcon name={isLiked ? 'heart' : 'heart-o'} size={24} color="#00923F" />
      </TouchableOpacity>

      {/* Horizontal Line */}
      <View style={localStyles.horizontalLine} />

      {/* Share Icons */}
      <View style={localStyles.shareIconsContainer}>
        <TouchableOpacity style={localStyles.shareIcon} onPress={shareOnTwitter}>
          <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
        </TouchableOpacity>
        <TouchableOpacity style={localStyles.shareIcon} onPress={shareOnTelegram}>
          <FontAwesomeIcon name="telegram" size={24} color="#0088cc" />
        </TouchableOpacity>
        <TouchableOpacity style={localStyles.shareIcon} onPress={shareOnWhatsApp}>
          <Ionicons name="logo-whatsapp" size={24} color="#25D366" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Styles
const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  featuredImage: {
    height: 300,
    width: '100%',
  },
  postContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  postTitle: {
    fontSize: 17,
    fontFamily: 'poppin', // Apply custom font family here
    marginTop: -48,
    color: '#00923F',
    borderRadius: 10,
    height: 90,
    padding: 20,
    textAlign: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 6,
    marginBottom: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginTop: 6,
    marginBottom: 6,
  },
  categoriesTitle: {
    fontWeight: 'bold',
  },
  category: {
    backgroundColor: '#00923F',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    color: '#fff',
    fontWeight: '500',
    marginRight: 8,
  },
  contentContainer: {
    padding: 15,
  },
  likeButton: {
    position: 'absolute',
    bottom: 90,
    right: 16,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 12,
    elevation: 5,
  },
  likedButton: {
    backgroundColor: '#fff',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 16,
  },
  shareIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  shareIcon: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
  },
});

// Export the component
export default ArticleScreen;
