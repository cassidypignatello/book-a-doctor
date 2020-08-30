import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Input = ({ text, placeholder, onChangeText, onSubmitEditing }) => {
  return (
    <TextInput
      style={styles.input}
      value={text}
      placeholder={placeholder}
      placeholderTextColor='#7e8d9f'
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    padding: '3%',
    marginTop: '2%',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: '#ebf5fe',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7e8d9f',
  },
})

Input.propTypes = {
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
}

export default Input
