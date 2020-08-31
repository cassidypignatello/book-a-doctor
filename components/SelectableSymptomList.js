import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import SectionTitle from './SectionTitle'
import Symptom from './Symptom'

const SelectableSymptomList = ({ symptoms, onButtonPress, title }) => (
  <View style={styles.container}>
    <SectionTitle title={title} />
    <View style={styles.buttonsContainer}>
      {symptoms.map((item, index) => (
        <Symptom
          key={index}
          onPress={() => onButtonPress(item, index)}
          iconName='add'
          iconColor='#8ac6c9'
        >
          {item}
        </Symptom>
      ))}
    </View>
  </View>
)

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

SelectableSymptomList.propTypes = {
  symptoms: PropTypes.array.isRequired,
  onButtonPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

export default SelectableSymptomList
