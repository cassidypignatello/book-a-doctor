import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const PushToBottom = ({ style, children }) => (
  <View style={{ ...styles.container, ...style }}>{children}</View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
})

PushToBottom.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
}

export default PushToBottom
