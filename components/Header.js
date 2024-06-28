import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ onSearch }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={30} />
      </TouchableOpacity>
      <View style={styles.searchBox}>
        <Icon name="search" size={20} style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={onSearch}
          placeholderTextColor="#999"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: 'rgba(0, 146, 63, 0.1)',
    borderRadius: 7,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
    color: '#888',
  },
  input: {
    flex: 1,
    color: '#333',
    fontSize: 16,
    paddingVertical: 8,
  },
  menuButton: {
    backgroundColor: 'rgba(0, 146, 63, 0.1)',
    borderRadius: 7,
    padding: 7,
  },
});

export default Header;
