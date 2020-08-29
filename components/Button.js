import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

const Button = ({ onPress, style, textStyle, children }) => (
  <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
    <View style={{ ...styles.button, ...style }}>
      <Text style={{ ...styles.text, ...textStyle }}>{children}</Text>
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

Button.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.object,
  textStyle: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Button
