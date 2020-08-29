import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import Button from './Button'

const PatientButtonsList = () => (
  <View style={styles.container}>
    <View style={styles.addButtonContainer}>
      <MaterialIcons
        name='add'
        size={48}
        color={'#ccd4dd'}
        style={styles.icon}
      />
      <Button style={styles.addButton}>Add</Button>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: '5%',
    position: 'relative',
    left: '2%',
  },
  addButtonContainer: {
    borderStyle: 'dashed',
    borderColor: '#93cdd0',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  addButton: {
    marginVertical: 5,
    marginHorizontal: 8,
  },
  icon: {
    position: 'absolute',
    top: '25%',
    right: '19%',
    elevation: 10,
    zIndex: 10,
  },
})

export default PatientButtonsList
