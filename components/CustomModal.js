import React from 'react'
import { Modal, TouchableOpacity, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const CustomModal = ({ modalVisible, children, onPress }) => {
  return (
    <Modal animationType='slide' transparent={true} visible={modalVisible}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.backdrop}
        onPress={onPress}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContentContainer}>{children}</View>
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    flex: 0.5,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalContentContainer: {
    marginTop: '5%',
    marginLeft: '5%',
  },
})

CustomModal.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default CustomModal
