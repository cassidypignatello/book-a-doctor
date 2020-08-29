import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { MaterialIcons } from '@expo/vector-icons'
import Button from './Button'

const PatientButtonsList = ({ patients, addPatient }) => {
  const renderItem = ({ item }) => (
    <Button style={styles.patientButton}>{item}</Button>
  )

  return (
    <View style={styles.container}>
      <View style={styles.addButtonContainer}>
        <MaterialIcons
          name='add'
          size={48}
          color={'#ccd4dd'}
          style={styles.icon}
        />
        <Button onPress={() => addPatient('Cassidy')} style={styles.addButton}>
          Add
        </Button>
      </View>
      <View style={{ width: '2%' }}></View>
      <FlatList
        horizontal
        data={patients}
        renderItem={renderItem}
        keyExtractor={(item, key) => `${item}-${key}`}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  patientButton: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
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
    paddingHorizontal: 30,
  },
  icon: {
    position: 'absolute',
    top: '25%',
    right: '56%',
    elevation: 10,
    zIndex: 10,
  },
})

PatientButtonsList.propTypes = {
  patients: PropTypes.arrayOf(PropTypes.string).isRequired,
  addPatient: PropTypes.func.isRequired,
}

export default PatientButtonsList
