import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShowFile from '../components/ShowFile';
import AddFile from '../components/AddFile';
const Tab = createBottomTabNavigator()
const MainTab = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen component={ShowFile} name="ShowScreen"/>
        <Tab.Screen component={AddFile} name="AddScreen"/>
    </Tab.Navigator>
  )
}

export default MainTab

const styles = StyleSheet.create({})