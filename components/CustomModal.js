import React from 'react'
import {
  Modal,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
} from 'react-native'
import PropTypes from 'prop-types'

const CustomModal = ({ modalVisible, children, onPress, title, subtitle }) => {
  return (
    <KeyboardAvoidingView>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.backdrop}
          onPress={onPress}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContentContainer}>
              <Text style={styles.contentTitle}>{title}</Text>
              <Text style={styles.contentSubTitle}>{subtitle}</Text>
              {children}
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    flex: 0.8,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  modalContentContainer: {
    flex: 1,
    marginTop: '5%',
  },
  contentTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: '5%',
  },
  contentSubTitle: {
    fontSize: 14,
    marginLeft: '5%',
  },
})

CustomModal.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default CustomModal
