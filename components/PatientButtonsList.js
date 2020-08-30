import React, { useState } from 'react'
import {
  FlatList,
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'
import { MaterialIcons } from '@expo/vector-icons'
import Button from './Button'
import Input from './Input'

const PatientButtonsList = ({ patients, addPatient }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [text, setText] = useState('')
  const onChangeText = (text) => setText(text)
  const onSubmitEditing = () => {
    if (!text) return
    addPatient(text)
    setText('')
    setModalVisible(!modalVisible)
  }
  const renderItem = ({ item }) => (
    <Button style={styles.patientButton}>{item}</Button>
  )

  return (
    <>
      <View style={styles.container}>
        <View style={styles.addButtonContainer}>
          <MaterialIcons
            name='add'
            size={48}
            color={'#ccd4dd'}
            style={styles.icon}
          />
          <Button
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.addButton}
          >
            Add
          </Button>
        </View>
        <View style={styles.divider}></View>
        <FlatList
          horizontal
          data={patients}
          renderItem={renderItem}
          keyExtractor={(item, key) => `${item}-${key}`}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'flex-end',
          }}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View
            style={{
              flex: 0.5,
              backgroundColor: 'white',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
            <View style={{ marginTop: '5%', marginLeft: '5%' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                Add Patient
              </Text>
              <Text style={{ fontSize: 14 }}>Patient Name:</Text>
              <Input
                text={text}
                placeholder={'Enter name here'}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
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
  divider: {
    width: '2%',
  },
})

PatientButtonsList.propTypes = {
  patients: PropTypes.arrayOf(PropTypes.string).isRequired,
  addPatient: PropTypes.func.isRequired,
}

export default PatientButtonsList
