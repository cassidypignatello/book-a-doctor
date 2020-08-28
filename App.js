import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import TitleBar from './components/TitleBar'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <TitleBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
})
