import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

const Button = ({ onPress, style, textStyle, children }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
    <View style={{ ...styles.button, ...style }}>
      <Text style={{ ...styles.text, ...textStyle }}>{children}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fffdff',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    alignSelf: 'flex-start',
  },
  text: {
    color: '#909da8',
    fontSize: 16,
    fontWeight: 'bold',
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
