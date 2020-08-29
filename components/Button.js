import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

const Button = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={{ ...styles.button, ...props.style }}>
      <Text style={{ ...styles.text, ...props.textStyle }}>
        {props.children}
      </Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    alignSelf: 'flex-start',
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
})

export default Button
