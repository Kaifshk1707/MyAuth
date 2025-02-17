import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
const HomeProduct = ({navigation}) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);

  const getApiData = async () => {
    setIsLoading(true); // Show loader while data is being fetched
    try {
      const response = await fetch('https://dummyjson.com/products');
      const result = await response.json(); // Convert response to JSON format
      setData(result.products); // Store the products in state
    } catch (error) {
      console.log('Error fetching data:', error); // Show error if something goes wrong
    }
    setIsLoading(false); // Hide loader after data is loaded
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5', padding: 10}}>
      {/* Search Input */}
      <View>
        <TouchableOpacity onPress={() => setShow(!show)}>
          {show ? null : (
            <Text
              style={{textAlign: 'center', fontSize: 30, textAlign: 'left'}}>
              Search
            </Text>
          )}
        </TouchableOpacity>
      </View>

      {show ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 10,
            paddingHorizontal: 12,
            elevation: 3,
          }}>
          <TextInput
            style={{flex: 1, fontSize: 16, paddingVertical: 10, color: '#333'}}
            placeholder="Search"
            placeholderTextColor="gray"
            onChangeText={text => setName(text)}
            value={name}
          />
          {name.length > 0 && (
            <TouchableOpacity onPress={() => setName('')} style={{padding: 8}}>
              <Text style={{color: '#888', fontSize: 18}}>
                :heavy_multiplication_x:
              </Text>
            </TouchableOpacity>
          )}
        </View>
      ) : null}

      {/* Search Text */}
      {name.length > 0 && (
        <Text style={{marginTop: 8, color: '#555', fontSize: 16}}>
          Searching: <Text style={{fontWeight: 'bold'}}>{name}</Text>
        </Text>
      )}
      {/* Show Loader When Fetching Data */}
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#4A90E2"
          style={{marginTop: 20}}
        />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: '#fff',
                padding: 15,
                borderRadius: 10,
                marginTop: 10,
                elevation: 3,
              }}>
              {/* Product Image */}
              <Image
                source={{uri: item.thumbnail}}
                style={{width: '100%', height: 150, borderRadius: 10}}
                resizeMode="cover"
              />
              {/* Product Details */}
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#333',
                  marginTop: 10,
                }}>
                {item.title}
              </Text>
              <Text style={{color: '#666', marginTop: 5}}>
                {item.description}
              </Text>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#222',
                    marginTop: 5,
                    fontSize: 20,
                  }}>
                  ${item.price}
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('SearchScreen')}
                  style={{
                    backgroundColor: 'lightgrey',
                    padding: '1.5%',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#222',
                      marginTop: 5,
                      fontSize: 16,
                    }}>
                    Add to Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};
export default HomeProduct;
