import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationContainer from '@react-navigation/native/lib/typescript/src/NavigationContainer'
import MainTab from './src/navigation/MainTab'

const App = () => {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})