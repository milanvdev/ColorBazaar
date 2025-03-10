import React from 'react';
import {View, StyleSheet, Modal} from 'react-native';

const CommonModal = ({
  isVisible,
  onClose,
  children,
  modalStyle,
  modalContainer,
  modalContent,
}) => {
  return (
    <Modal
      animationType="fade"
      visible={isVisible}
      transparent={true}
      onRequestClose={onClose}
      style={[styles.modal, modalStyle]}>
      <View style={[styles.modalContainer, modalContainer]}>
        <View style={[styles.modalContent, modalContent]}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default CommonModal;
