import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import Button from './Button'

const Symptom = ({
  onPress,
  children,
  style,
  textStyle,
  iconName,
  iconColor,
}) => (
  <View style={styles.container}>
    <Button
      onPress={onPress}
      style={{ ...styles.button, ...style }}
      textStyle={{ ...styles.buttonText, ...textStyle }}
      iconName={iconName}
      iconColor={iconColor}
    >
      {children}
    </Button>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginTop: '10%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#8ac6c9',
    fontWeight: '400',
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
