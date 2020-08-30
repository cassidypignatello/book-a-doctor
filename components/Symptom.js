import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { MaterialIcons } from '@expo/vector-icons'
import Button from './Button'

const Symptom = ({
  onPress,
  children,
  style,
  textStyle,
  iconName,
  iconColor,
}) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={onPress}
        style={{ ...styles.button, ...style }}
        textStyle={{ ...styles.buttonText, ...textStyle }}
      >
        {children}
      </Button>
      <MaterialIcons
        name={iconName}
        size={24}
        color={iconColor}
        style={styles.icon}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderRadius: 16,
    paddingRight: '20%',
    marginTop: '10%',
  },
  buttonText: {
    color: '#8ac6c9',
    fontWeight: '400',
  },
  icon: {
    position: 'absolute',
    top: '40%',
    left: '56%',
  },
})

Symptom.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  textStyle: PropTypes.object,
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
}

export default Symptom
