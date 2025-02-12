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
const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const getApiData = async () => {
    setIsLoading(true); // Show loader while data is being fetched
    try {
      const response = await fetch('https://dummyjson.com/products'); // Get data from API
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
    <View style={{flex: 1, backgroundColor: '#F5F5F5', padding: 16}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#F5F5F5',
          justifyContent: 'space-between',
          width: '90%',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            color: '#333',
            fontSize: 28,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 10,
          }}>
          Home
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
          <Text
            style={{
              color: '#333',
              fontSize: 28,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 10,
            }}>
            Go
          </Text>
        </TouchableOpacity>
      </View>
      {/* Search Input */}
      <View>
        <TouchableOpacity onPress={() => setShow(!show)}>
          {show ? null : <Text>Search click here...</Text>}
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
              <Text style={{fontWeight: 'bold', color: '#222', marginTop: 5}}>
                :moneybag: ${item.price}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};
export default HomeScreen;

// import {View, Text, TextInput} from 'react-native';
// import React, {Component} from 'react';

// class HomeScreen extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'Child Component',
//     };
//   }

//   updateName(dat) {
//     this.setState({name: dat});
//   }

//   render() {
//     return (
//       <View>
//         <Text>Class Component</Text>
//         <TextInput
//           placeholder="Search"
//           onChangeText={text => this.updateName(text)}
//         />
//         <Text>{this.state.name}</Text>
//         <TextInput />
//       </View>
//     );
//   }
// }

// export default HomeScreen;
