import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { FC } from "react";
import { PopUpAlert, Strings } from "../utils";
import { useTheme } from "../store/globalTheme";

interface Props {
  isVisible: boolean;
  onChangeVisible(): void;
  onDeleteItem(itemKey: String): void;
  itemText: String;
  type: PopUpAlert;
}

let text: String;

const ModalAlert: FC<Props> = (props): JSX.Element => {
  const { isVisible, onChangeVisible, onDeleteItem, itemText, type } = props;
  const { theme } = useTheme();

  if (type == Strings.Error)  text = Strings.ErrorAlert1 + "\"" + itemText + "\"" + Strings.ErrorAlert2;
  if (type == Strings.Action) text = Strings.ActionAlert + "\"" + itemText + "\"" + Strings.QuestionMark;

  const closeOnPressingOutside = () => {
    if (type == Strings.Error) onChangeVisible();
  };

  const handleConfirm = () => {
    onChangeVisible();
    onDeleteItem(itemText);
  };

  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          onChangeVisible();
        }}
      >
        <TouchableWithoutFeedback onPress={closeOnPressingOutside}>
          <View style={styles.centeredView}>
            <View
              style={[
                styles.modalView,
                { backgroundColor: theme.totalWhite, shadowColor: theme.totalBlack },
              ]}
            >
              <Text style={styles.modalText}>{text}</Text>
              <View style={styles.buttonContainer}>
                {type == Strings.Action && (
                  <Pressable
                    style={[styles.button, { backgroundColor: theme.alertButton }]}
                    onPress={handleConfirm}
                  >
                    <Text style={[styles.textStyle, { color: theme.totalWhite }]}>
                      Yes
                    </Text>
                  </Pressable>
                )}
                <Pressable
                  style={[styles.button, { backgroundColor: theme.alertButton }]}
                  onPress={onChangeVisible}
                >
                  <Text
                    style={[
                      styles.textStyle,
                      styles.extraButtonPadding,
                      { color: theme.totalWhite },
                    ]}
                  >
                    {type == Strings.Error ? Strings.Ok : Strings.No}
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
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
    borderRadius: 20,
    padding: 25,
    justifyContent: "space-between",
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
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  extraButtonPadding: {
    paddingHorizontal: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
