import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <View style={styles.avatar} />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>john.doe@example.com</Text>
      </View>

      {/* Profile Options */}
      <TouchableOpacity style={styles.optionButton} onPress={() => console.log('Edit Profile')}>
        <Text style={styles.optionText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => console.log('Settings')}>
        <Text style={styles.optionText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={() => console.log('Logout')}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
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
  profileSection: {
    alignItems: 'center',
    marginTop: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#9FA8DA',
    marginBottom: 20,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  userEmail: {
    fontSize: 16,
    color: '#616161',
    marginTop: 4,
  },
  optionButton: {
    marginTop: 30,
    paddingVertical: 14,
    marginHorizontal: 20,
    backgroundColor: '#9FA8DA',
    borderRadius: 12,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  logoutButton: {
    marginTop: 40,
    paddingVertical: 14,
    marginHorizontal: 20,
    backgroundColor: '#FF6F61',
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});

export default ProfileScreen;
