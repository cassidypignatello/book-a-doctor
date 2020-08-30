import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { MaterialIcons } from '@expo/vector-icons'
import Input from './Input'
import CustomModal from './CustomModal'
import SelectedSymptoms from './SelectedSymptoms'
import SelectableSymptomList from './SelectableSymptomList'

const ReasonForm = ({
  selectedSymptoms,
  onDeselectSymptom,
  symptoms,
  onSelectSymptom,
  addSymptom,
}) => {
  const [modalVisible, setModalVisible] = useState(false)
  const callModal = () => setModalVisible(!modalVisible)
  const [text, setText] = useState('')
  const onChangeText = (text) => setText(text)
  const onSubmitEditing = () => {
    if (!text) return
    addSymptom(text)
    setText('')
    callModal()
  }
  return (
    <>
      <View style={styles.container}>
        <MaterialIcons
          name='search'
          size={32}
          color='#8ac6c9'
          style={styles.icon}
        />
        <Input
          style={styles.input}
          placeholder='Add reasons'
          onTouchStart={callModal}
        />
      </View>
      <CustomModal
        modalVisible={modalVisible}
        onPress={callModal}
        title='Symptoms & Conditions'
        subtitle='Please specify your symptoms:'
      >
        <Input
          text={text}
          placeholder='e.g. Cough'
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
        <SelectedSymptoms
          symptoms={selectedSymptoms}
          onButtonPress={onDeselectSymptom}
        />
        <SelectableSymptomList
          symptoms={symptoms}
          onButtonPress={onSelectSymptom}
        />
      </CustomModal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '2%',
    zIndex: 10,
    elevation: 10,
  },
  input: {
    marginTop: '8%',
    textAlign: 'center',
  },
})

ReasonForm.propTypes = {
  selectedSymptoms: PropTypes.array.isRequired,
  onDeselectSymptom: PropTypes.func.isRequired,
  symptoms: PropTypes.array.isRequired,
  onSelectSymptom: PropTypes.func.isRequired,
  addSymptom: PropTypes.func.isRequired,
}

export default ReasonForm
