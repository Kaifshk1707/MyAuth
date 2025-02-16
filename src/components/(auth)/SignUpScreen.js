import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter your valid details');
            return;
        }
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);
        Alert.alert('Success', 'Registration Successful.');
        navigation.replace('LoginScreen');
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5' }}>
            <Image style={{ height: 150, width: 150, borderRadius: 100 }} source={require("./../../assets/image/SignUp.jpeg")} />
            <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>Sign Up</Text>

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
            }} onPress={handleSignUp}>
                <Text style={{
                    color: '#fff',
                    fontSize: 18,
                    fontWeight: 'bold',
                }}>Sign Up</Text>
            </TouchableOpacity>

                  <View style={{ flexDirection: 'row', marginTop: 16 }}>
                    <Text style={{ color: '#4A9', fontSize: 14 }}>
                      Don't have an account?{' '}
                    </Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                      <Text style={{ color: '#4A9', fontSize: 15, fontWeight: 'bold', textDecorationLine: 'underline' }}>
                        Login Up
                      </Text>
                    </TouchableOpacity>
                  </View>
        </View>
    );
};

export default SignUpScreen;

 