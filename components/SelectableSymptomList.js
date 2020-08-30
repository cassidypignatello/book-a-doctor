import React from 'react'
import { View, StyleSheet } from 'react-native'
import SectionTitle from './SectionTitle'

const SelectableSymptomList = () => {
  return (
    <View style={styles.container}>
      <SectionTitle title='Choose your symptoms and reasons:' />
      {/* Add available symptoms here */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: '8%',
  },
})

export default SelectableSymptomList
