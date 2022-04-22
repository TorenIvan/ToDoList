import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import React, { useState, FC } from "react";
import { PopUpAlert } from "../utils";

interface Props {
  isVisible: boolean;
  onChangeVisible(): void;
  text: String;
  type: PopUpAlert;
}

const ModalAlert: FC<Props> = ({
  isVisible,
  onChangeVisible,
  text,
  type,
}): JSX.Element => {
  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          onChangeVisible();
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{text}</Text>
            <View style={styles.buttonContainer}>
              {type == "action" && (
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={onChangeVisible}
                >
                  <Text style={styles.textStyle}>Yes</Text>
                </Pressable>
              )}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onChangeVisible}
              >
                <Text style={styles.textStyle}> NO </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalAlert;

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    flex: 0.25,
    zIndex: -1,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
