import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  const getApiData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let response = await fetch(url);
    response = await response.json();
    setData(response);
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
          textAlign: 'center',
          marginBottom: 10,
        }}>
        Home
      </Text>

      {/* Search Input */}
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
          placeholder="Search..."
          placeholderTextColor="gray"
          onChangeText={text => setName(text)}
          value={name}
        />
        {name.length > 0 && (
          <TouchableOpacity onPress={() => setName('')} style={{padding: 8}}>
            <Text style={{color: '#888', fontSize: 18}}>✖</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Search Text */}
      {name.length > 0 && (
        <Text style={{marginTop: 8, color: '#555', fontSize: 16}}>
          Searching : <Text style={{fontWeight: 'bold'}}>{name}</Text>
        </Text>
      )}

      {/* Post List */}
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
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#333'}}>
              {item.title}
            </Text>
            <Text style={{color: '#666', marginTop: 5}}>{item.body}</Text>
          </View>
        )}
      />
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
