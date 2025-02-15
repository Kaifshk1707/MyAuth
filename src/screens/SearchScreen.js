import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const SearchScreen = ({navigation}) => {
  return (
    <View>
      <Text>SearchScreen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text
          style={{
            color: '#333',
            fontSize: 28,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 10,
          }}>
          Go back
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchScreen;
