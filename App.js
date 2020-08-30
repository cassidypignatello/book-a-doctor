import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import Constants from 'expo-constants'
import TitleBar from './components/TitleBar'
import SegmentedControls from './components/SegmentedControls'
import EditablePatientList from './components/EditablePatientList'
import ReasonForm from './components/ReasonForm'
import SelectableSymptomList from './components/SelectableSymptomList'

export default function App() {
  const [tabIndex, setTabIndex] = useState(0)
  const [patients, setPatients] = useState([
    {
      id: '0',
      name: 'Yarik Nikolenko',
    },
    {
      id: '1',
      name: 'Cassidy Pignatello',
    },
    {
      id: '2',
      name: 'Zefanya Prabowo',
    },
    {
      id: '3',
      name: 'Conor McGregor',
    },
    {
      id: '4',
      name: 'Israel Adesanya',
    },
  ])

  const handleTabsChange = (index) => setTabIndex(index)
  const onAddPatient = (name, id) => setPatients([{ id, name }, ...patients])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <TitleBar title='Book a Doctor' />
      <SegmentedControls
        tabs={['Doctor', 'Video Consult']}
        currentIndex={tabIndex}
        onChange={handleTabsChange}
        segmentedControlsBackgroundColor='#ebf5fe'
        activeSegmentBackgroundColor='#fffdff'
        activeTextColor='#8ac6c9'
        textColor='#a0a7ae'
        paddingVertical={10}
      />
      <EditablePatientList patients={patients} addPatient={onAddPatient} />
      <ReasonForm />
      <SelectableSymptomList />
    </SafeAreaView>
  )
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
