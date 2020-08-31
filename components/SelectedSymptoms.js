import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import SectionTitle from './SectionTitle'
import Symptom from './Symptom'

const SelectedSymptoms = ({ symptoms, onButtonPress, title }) =>
  symptoms.length > 0 ? (
    <View style={styles.container}>
      <SectionTitle title={title} />
      <View style={styles.buttonsContainer}>
        {symptoms.map((item, index) => (
          <Symptom
            key={index}
            onPress={() => onButtonPress(item, index)}
            iconName='check'
            iconColor='#fffdff'
            style={styles.button}
            textStyle={styles.buttonText}
          >
            {item}
          </Symptom>
        ))}
      </View>
    </View>
  ) : null

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: '8%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#30c2d0',
  },
  buttonText: {
    color: '#fffdff',
  },
})

SelectedSymptoms.propTypes = {
  symptoms: PropTypes.array.isRequired,
  onButtonPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

export default SelectedSymptoms
