import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import Constants from 'expo-constants'
import TitleBar from './components/TitleBar'
import SegmentedControls from './components/SegmentedControls'
import EditablePatientList from './components/EditablePatientList'

export default class App extends Component {
  state = {
    tabIndex: 0,
    patients: [
      'Yarik Nikolenko',
      'Cassidy Pignatello',
      'Zefanya Prabowo',
      'Conor McGregor',
      'Israel Adesanya',
    ],
  }

  handleTabsChange = (index) => {
    this.setState({ tabIndex: index })
  }

  onAddPatient = (name) => {
    const { patients } = this.state

    this.setState({
      patients: [name, ...patients],
    })
  }

  render() {
    const { tabIndex, patients } = this.state
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style='auto' />
        <TitleBar title={'Book a Doctor'} />
        <SegmentedControls
          tabs={['Doctor', 'Video Consult']}
          currentIndex={tabIndex}
          onChange={this.handleTabsChange}
          segmentedControlsBackgroundColor='#ebf5fe'
          activeSegmentBackgroundColor='#fffdff'
          activeTextColor='#8ac6c9'
          textColor='#a0a7ae'
          paddingVertical={10}
        />
        <EditablePatientList
          patients={patients}
          addPatient={this.onAddPatient}
        />
      </SafeAreaView>
    )
  }
}

const platformVersion =
  Platform.OS === 'ios' ? parseInt(Platform.Version, 10) : Platform.Version

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdff',
    alignItems: 'center',
    marginTop:
      Platform.OS === 'android' || platformVersion < 11
        ? Constants.statusBarHeight + 20
        : 0,
  },
})
