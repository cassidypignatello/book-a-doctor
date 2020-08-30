import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import SectionTitle from './SectionTitle'
import Symptom from './Symptom'

const SelectableSymptomList = () => {
  const [symptoms, setSymptoms] = useState([
    'Symptom 1',
    'Symptom 2',
    'Symptom 3',
    'Symptom 4',
    'Symptom 5',
    'Symptom 6',
    'Symptom 7',
  ])
  const onButtonPress = (index) => {
    setSymptoms(symptoms.filter((symptom, i) => i !== index))
  }
  return (
    <View style={styles.container}>
      <SectionTitle title='Choose your symptoms and reasons:' />
      {/* Add available symptoms here */}
      <View style={styles.buttonsContainer}>
        {symptoms.map((item, index) => (
          <Symptom key={index} onPress={() => onButtonPress(index)}>
            {item}
          </Symptom>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: '8%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default SelectableSymptomList
