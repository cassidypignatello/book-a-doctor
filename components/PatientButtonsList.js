import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from './Button'

const PatientButtonsList = () => (
  <View style={styles.container}>
    <Button>Add</Button>
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: '2%',
  },
})

export default PatientButtonsList
