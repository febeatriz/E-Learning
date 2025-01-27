import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../HomeScreen';
import MyCourse from '../MyCourse';
import LeaderBoard from '../LeaderBoard';
import ProfileScreen from '../ProfileScreen';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import HomeScreen from '../HomeScreen';
const Tab = createBottomTabNavigator();

export default function TavNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      
    }}>
        <Tab.Screen name ='home' component = {HomeScreen} 
        options = {{
          tabBarIcon:({color,size}) =>(
            <FontAwesome5 name="home" size={size} color={color} />
          )
        }} 
        />
        <Tab.Screen name ='my-course' component = {MyCourse} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          )
        }} />
        <Tab.Screen name ='leaderboard' component = {LeaderBoard} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          )
        }} />
        <Tab.Screen name ='profile' component = {ProfileScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          )
        }} 
        />
    </Tab.Navigator>
  )
}