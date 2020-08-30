import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { MaterialIcons } from '@expo/vector-icons'
import Button from './Button'

const Symptom = ({ onPress, children }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={onPress}
        style={styles.button}
        textStyle={styles.buttonText}
      >
        {children}
      </Button>
      <MaterialIcons
        name='add'
        size={24}
        color={'#8ac6c9'}
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
}

export default Symptom
