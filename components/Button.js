import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import PropTypes from 'prop-types'

const Button = ({
  onPress,
  style,
  textStyle,
  children,
  iconName,
  iconColor,
}) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
    <View style={{ ...styles.button, ...style }}>
      <Text style={{ ...styles.text, ...textStyle }}>{children}</Text>
      {iconName && (
        <MaterialIcons
          name={iconName}
          size={24}
          color={iconColor}
          style={styles.icon}
        />
      )}
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
  icon: {
    marginLeft: '5%',
  },
})

Button.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]),
  textStyle: PropTypes.object,
  children: PropTypes.node.isRequired,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
}

export default Button
