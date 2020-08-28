import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import Constants from 'expo-constants'
import TitleBar from './components/TitleBar'
import SegmentedControls from './components/SegmentedControls'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <TitleBar title={'Book a Doctor'} />
      <SegmentedControls />
    </SafeAreaView>
  )
}

const platformVersion =
  Platform.OS === 'ios' ? parseInt(Platform.Version, 10) : Platform.Version

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdff',
    marginTop:
      Platform.OS === 'android' || platformVersion < 11
        ? Constants.statusBarHeight + 20
        : 0,
  },
})
