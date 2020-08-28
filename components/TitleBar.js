import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

const TitleBar = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.leftIcon}>
      <FontAwesome5 name='arrow-left' size={20} color='#30c2d0' />
    </TouchableOpacity>
    <Text style={styles.title}>Book a Doctor</Text>
    <FontAwesome5
      name='stethoscope'
      size={32}
      color='#30c2d0'
      style={styles.rightIcon}
    />
  </View>
)

export default TitleBar

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftIcon: {
    position: 'relative',
    left: 20,
  },
  title: {
    fontSize: 16,
    position: 'relative',
    right: 50,
  },
  rightIcon: {
    position: 'relative',
    right: 15,
  },
})
