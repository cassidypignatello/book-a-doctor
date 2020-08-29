import React from 'react'
import { StyleSheet, View } from 'react-native'
import SectionTitle from './SectionTitle'
import PatientButtonsList from './PatientButtonsList'

const EditablePatientList = () => (
  <View style={styles.container}>
    <SectionTitle title={'Choose Patient:'} />
    <PatientButtonsList />
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: '2%',
  },
})

export default EditablePatientList
