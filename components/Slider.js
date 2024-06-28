import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import { getPosts } from '../api/wpApi';

const Slider = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.slider}>
      {posts.map((post) => (
        <View key={post.id} style={styles.slide}>
          <Image source={{ uri: post.featuredImage.node.sourceUrl }} style={styles.image} />
          <View style={styles.overlay}>
            <Text style={styles.title}>{post.title}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  slider: {
    height: 5, // Adjust the height as per your preference
  },
  slide: {
    marginRight: 10,
    position: 'relative',
  },
  image: {
    width: 300,
    height: '100%', // Ensures the image covers the container's height
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    top: 70,
    textAlign: 'left',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
});

export default Slider;
