import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { MaterialIcons } from '@expo/vector-icons'
import Button from './Button'
import Input from './Input'
import CustomModal from './CustomModal'

const PatientButtonsList = ({ patients, addPatient }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [text, setText] = useState('')
  const [selectedId, setSelectedId] = useState(null)
  const callModal = () => setModalVisible(!modalVisible)
  const onChangeText = (text) => setText(text)
  const onSubmitEditing = () => {
    const id = Math.random().toString()
    if (!text) return
    addPatient(text, id)
    setText('')
    setModalVisible(!modalVisible)
  }
  const renderItem = ({ item }) => {
    const borderColor = item.id === selectedId ? '#8ac6c9' : 'transparent'
    return (
      <Button
        style={{
          marginVertical: 5,
          marginHorizontal: 10,
          borderWidth: 1,
          borderColor,
        }}
        onPress={() => setSelectedId(item.id)}
      >
        {item.name}
      </Button>
    )
  }
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
          <Button onPress={callModal} style={styles.addButton}>
            Add
          </Button>
        </View>
        <View style={styles.divider}></View>
        <FlatList
          horizontal
          data={patients}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          extraData={selectedId}
        />
      </View>
      <CustomModal
        modalVisible={modalVisible}
        onPress={callModal}
        title='Add Patient'
        subtitle='Patient Name:'
      >
        <Input
          text={text}
          placeholder='Enter name here'
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
      </CustomModal>
    </>
  )
}

const styles = StyleSheet.create({
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
  patients: PropTypes.arrayOf(PropTypes.object).isRequired,
  addPatient: PropTypes.func.isRequired,
}

export default PatientButtonsList
