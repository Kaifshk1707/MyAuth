import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search</Text>
      </View>

      {/* Search Info */}
      <View style={styles.searchSection}>
        <Text style={styles.searchText}>Search for your favorite items and explore!</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#1E293B',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  searchSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  searchText: {
    fontSize: 20,
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: 30,
  },
  backButton: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    backgroundColor: '#9FA8DA',
    borderRadius: 12,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});

export default SearchScreen;