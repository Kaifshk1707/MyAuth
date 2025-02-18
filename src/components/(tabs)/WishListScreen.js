import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const WishListScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>WishList</Text>
      </View>

      {/* Empty Wishlist Message */}
      <View style={styles.emptySection}>
        <Text style={styles.emptyText}>Your wishlist is empty!</Text>
        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => console.log('Navigate to explore')}
        >
          <Text style={styles.exploreButtonText}>Explore Items</Text>
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
  emptySection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  exploreButton: {
    marginTop: 30,
    paddingVertical: 14,
    paddingHorizontal: 32,
    backgroundColor: '#1E293B',
    borderRadius: 12,
    alignItems: 'center',
  },
  exploreButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});

export default WishListScreen;
