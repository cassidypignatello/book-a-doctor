import React from 'react'
import { StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types'

const SectionTitle = ({ title }) => (
  <>
    <Text style={styles.title}>{title}</Text>
  </>
)

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

SectionTitle.defaultProps = {
  title: '',
}

export default SectionTitle
