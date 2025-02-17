import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import ProfileScreen from './ProfileScreen';
import WishListScreen from './WishListScreen';
import { HomeIcon, SearchIcon, HeartIcon, UserIcon } from 'lucide-react-native';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 10,
                    left: 20,
                    right: 20,
                    elevation: 5,
                    backgroundColor: '#fff',
                    borderRadius: 25,
                    height: 80,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.25,
                    shadowRadius: 10,
                    alignSelf:"center"
                },
                tabBarItemStyle: {
                    marginTop:"5%"
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                
                options={{
                    headerShown: false, 
                    tabBarIcon: ({ focused }) => (
                        <HomeIcon width={32} height={32} color={focused ? '#4A9' : '#4A99'} />
                    ),
                }}
            />

            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    headerShown: false, 
                    tabBarIcon: ({ focused }) => (
                        <SearchIcon width={32} height={32} color={focused ? '#4A9' : '#4A99'} />
                    ),
                }}
            />

            <Tab.Screen
                name="WishList"
                component={WishListScreen}
                options={{
                    headerShown: false, 
                    tabBarIcon: ({ focused }) => (
                        <HeartIcon width={32} height={32} color={focused ? '#4A9' : '#4A99'} />
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false, 
                    tabBarIcon: ({ focused }) => (
                        <UserIcon width={32} height={32} color={focused ? '#4A9' : '#4A99'} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default MyTabs;
