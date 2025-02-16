import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Warning!', 'Please enter your valid details');
      return;
    }
    const storedEmail = await AsyncStorage.getItem('email');
    const storedPassword = await AsyncStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      Alert.alert('Success', 'Login Successful');
      navigation.replace('MainApp');
    } else {
      Alert.alert('Wrong details!', 'Please try again');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5' }}>
      <Image style={{ height: 150, width: 150, borderRadius: 100 }} source={require("../../assets/image/Login.png")} />
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>Login</Text>

      <TextInput style={{
        width: '90%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
        fontSize: 16,
      }} placeholder="Enter Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TextInput style={{
        width: '90%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
        fontSize: 16,
      }} placeholder="Enter Password" secureTextEntry value={password} onChangeText={setPassword} />

      <TouchableOpacity style={{
        backgroundColor: '#4A9',
        paddingVertical: 15,
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
        marginTop: 10,
      }} onPress={handleLogin}>
        <Text style={{
          color: '#fff',
          fontSize: 18,
          fontWeight: 'bold',
        }}>Login</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', marginTop: 16 }}>
        <Text style={{ color: '#4A9', fontSize: 14 }}>
          Don't have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={{ color: '#4A9', fontSize: 15, fontWeight: 'bold', textDecorationLine: 'underline' }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};
export default LoginScreen;
