import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import HomeProduct from '../screens/HomeProduct';
const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <View style={{flex: 1, backgroundColor: '#F5F5F5', padding: 16}}>
      <Text
        style={{
          color: '#333',
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'right',
          marginBottom: 10,
        }}>
        0
      </Text>
      <HomeProduct />
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
