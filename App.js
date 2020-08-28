import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import Constants from 'expo-constants'
import TitleBar from './components/TitleBar'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <TitleBar />
    </SafeAreaView>
  )
}

const platformVersion =
  Platform.OS === 'ios' ? parseInt(Platform.Version, 10) : Platform.Version

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop:
      Platform.OS === 'android' || platformVersion < 11
        ? Constants.statusBarHeight + 20
        : 0,
  },
})
