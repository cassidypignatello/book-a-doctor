import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, Platform, View } from 'react-native'
import Constants from 'expo-constants'
import TitleBar from './components/TitleBar'
import SegmentedControls from './components/SegmentedControls'
import EditablePatientList from './components/EditablePatientList'
import ReasonForm from './components/ReasonForm'
import SelectableSymptomList from './components/SelectableSymptomList'
import SelectedSymptoms from './components/SelectedSymptoms'
import Button from './components/Button'
import PushToBottom from './components/PushToBottom'

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

  const [symptoms, setSymptoms] = useState([
    'Headache',
    'Fever',
    'Indigestion',
    'Heartburn',
    'Insomnia',
    'Anxiety',
    'Depression',
  ])
  const [selectedSymptoms, setSelectedSymptoms] = useState([])
  const onSelectSymptom = (item, index) => {
    setSelectedSymptoms([item, ...selectedSymptoms])
    setSymptoms(symptoms.filter((symptom, i) => i !== index))
  }
  const onDeselectSymptom = (item, index) => {
    setSymptoms([item, ...symptoms])
    setSelectedSymptoms(selectedSymptoms.filter((symptom, i) => i !== index))
  }
  const handleTabsChange = (index) => setTabIndex(index)
  const onAddPatient = (name, id) => setPatients([{ id, name }, ...patients])
  const onAddSymptom = (symptom) =>
    setSelectedSymptoms([symptom, ...selectedSymptoms])

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
      <ReasonForm
        selectedSymptoms={selectedSymptoms}
        deselectSymptom={onDeselectSymptom}
        symptoms={symptoms}
        selectSymptom={onSelectSymptom}
        addSymptom={onAddSymptom}
      />
      <SelectedSymptoms
        symptoms={selectedSymptoms}
        onButtonPress={onDeselectSymptom}
      />
      <SelectableSymptomList
        symptoms={symptoms}
        onButtonPress={onSelectSymptom}
      />
      <PushToBottom>
        <Button style={styles.button} textStyle={styles.buttonText}>
          Next
        </Button>
      </PushToBottom>
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
  button: {
    width: 380,
    paddingVertical: 20,
    backgroundColor: '#44d7df',
  },
  buttonText: {
    color: '#fffdff',
    textAlign: 'center',
    fontSize: 20,
  },
})
