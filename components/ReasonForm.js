import React, { useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { MaterialIcons } from '@expo/vector-icons'
import Input from './Input'
import CustomModal from './CustomModal'
import SelectedSymptoms from './SelectedSymptoms'
import SelectableSymptomList from './SelectableSymptomList'
import Button from './Button'
import PushToBottom from './PushToBottom'

const ReasonForm = ({
  selectedSymptoms,
  deselectSymptom,
  symptoms,
  selectSymptom,
  addSymptom,
}) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [text, setText] = useState('')
  const callModal = () => setModalVisible(!modalVisible)
  const onChangeText = (text) => setText(text)
  const onSubmitEditing = () => {
    if (!text) return
    addSymptom(text)
    setText('')
  }
  const onButtonPress = () => {
    if (!text) {
      callModal()
    }
    onSubmitEditing()
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
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Input
            text={text}
            placeholder='e.g. Cough'
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
          />
          <SelectedSymptoms
            symptoms={selectedSymptoms}
            onButtonPress={deselectSymptom}
          />
          <SelectableSymptomList
            symptoms={symptoms}
            onButtonPress={selectSymptom}
          />
        </ScrollView>
        <PushToBottom style={styles.bottomButtonContainer}>
          <Button
            style={styles.button}
            textStyle={styles.buttonText}
            onPress={onButtonPress}
          >
            Done
          </Button>
        </PushToBottom>
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
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  bottomButtonContainer: {
    marginBottom: 26,
  },
  button: {
    width: 380,
    marginTop: '5%',
    paddingVertical: 20,
  },
  buttonText: {
    color: '#8ac6c9',
    textAlign: 'center',
    fontSize: 20,
  },
})

ReasonForm.propTypes = {
  selectedSymptoms: PropTypes.array.isRequired,
  deselectSymptom: PropTypes.func.isRequired,
  symptoms: PropTypes.array.isRequired,
  selectSymptom: PropTypes.func.isRequired,
  addSymptom: PropTypes.func.isRequired,
}

export default ReasonForm
