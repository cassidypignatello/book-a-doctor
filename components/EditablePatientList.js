import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import SectionTitle from './SectionTitle'
import PatientButtonsList from './PatientButtonsList'

const EditablePatientList = ({ patients, addPatient }) => (
  <View style={styles.container}>
    <SectionTitle title={'Choose Patient:'} />
    <PatientButtonsList patients={patients} addPatient={addPatient} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: '2%',
  },
})

EditablePatientList.propTypes = {
  patients: PropTypes.arrayOf(PropTypes.string).isRequired,
  addPatient: PropTypes.func.isRequired,
}

export default EditablePatientList
