import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import Input from './Input'

const ReasonForm = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name='search'
        size={32}
        color='#8ac6c9'
        style={styles.icon}
      />
      <Input style={styles.input} placeholder='Add reasons' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '2%',
    zIndex: 10,
    elevation: 10,
  },
  input: {
    marginTop: '8%',
    textAlign: 'center',
  },
})

export default ReasonForm
