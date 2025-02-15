import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const SearchScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2f2f2', padding: 20 }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#333', marginBottom: 20 }}>Search Screen</Text>

      <View style={{
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 4,
        width: '100%',
        maxWidth: 350,
        alignItems: 'center'
      }}>
        <Text style={{ fontSize: 16, color: '#555', textAlign: 'center', marginBottom: 20 }}>
          Search for your favorite items and explore!
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: '#9FA8DA',
            paddingVertical: 12,
            paddingHorizontal: 30,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchScreen;
