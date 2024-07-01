import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { getPosts } from '../api/wpApi';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

const AllPostsScreen = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const postsData = await getPosts();
      setPosts(postsData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const navigateToArticle = (postId) => {
    navigation.navigate('Article', { postId });
  };

  const renderRelativeTime = (date) => {
    return moment(date).fromNow();
  };

  const renderPostItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToArticle(item.id)} style={styles.postContainer}>
      <View style={styles.imageContainer}>
        {item.featuredImage && item.featuredImage.node && item.featuredImage.node.sourceUrl && (
          <Image source={{ uri: item.featuredImage.node.sourceUrl }} style={styles.image} />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{renderRelativeTime(item.date)} | {item.categories.nodes[0].name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique key
        renderItem={renderPostItem}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  flatListContainer: {
    paddingBottom: 10,
  },
  postContainer: {
    flexDirection: 'row',
    marginBottom: 18,
    borderRadius: 10,
    height: 100,
    overflow: 'hidden',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  imageContainer: {
    width: 136,
    height: 82,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 10,
  },
  title: {
    fontSize: 12,
    fontFamily: 'poppins-semibold',
    height: 'auto',
    color: '#00923F',
  },
  date: {
    color: '#888',
    fontSize: 10,
    marginTop: 5,
    fontFamily: 'poppins-regular',
  },
});

export default AllPostsScreen;
