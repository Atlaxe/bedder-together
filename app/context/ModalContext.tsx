import React, { createContext, useContext, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";

type ModalContextType = {
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  const openModal = (modalContent: React.ReactNode) => {
    setVisible(true);
    setContent(modalContent);
  };

  const closeModal = () => {
    setVisible(false);
    setContent(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal visible={visible} transparent onRequestClose={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.modalContent}>{content}</View>
        </View>
      </Modal>
    </ModalContext.Provider>
  );
}


export const useAppModal = () => {
    const context = useContext(ModalContext);
    if (!context) throw new Error("useAppModal must be used within ModalProvider")
    return context
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    paddingVertical: 64
  },
  modalContent: {
    padding: 20,
    width: '100%',

    backgroundColor: '#3E3937',

    borderBottomColor: '#514d4b',
    borderRightColor: '#514d4b',
    borderTopColor: '#66615f',
    borderLeftColor: '#66615f',
    borderWidth: 4
  }
});