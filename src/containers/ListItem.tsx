import { Pressable, StyleSheet, Text, View } from "react-native";
import { item, itemHeight } from "../utils";
import React, { memo } from "react";
import { useTheme } from "../store/globalTheme";
import RadioButton from "../components/Buttons/RadioButton";
import { CrossIcon } from "../assets";

interface Props {
  item: item;
  onDeleteItem: (text: String) => void;
  onCheckButtonPress: (text: String) => void;
}

const ListItem: React.FC<Props> = ({ item: { checked, text }, onDeleteItem, onCheckButtonPress }): JSX.Element => {
  const { theme } = useTheme();

  const handleButtonPressed = () => {
    onCheckButtonPress(text.toString());
  }

  const handleDeleteItem = () => {
    onDeleteItem(text.toString());
  }

  let textColor = "#717287";
  if (checked == "checked") textColor = "#B6B5BB";
  return (
    <View style={[styles.itemContainer, { backgroundColor: "#FFFFFF" }]}>
      <View style={styles.radioButtonContainer}>
        <RadioButton
          value={checked}
          onRadioButtonPress={handleButtonPressed}
          checkedColor={theme.backgroundRadioButton}
          borderColor={theme.borderRadioButton}
        />
      </View>
      <View style={styles.textContainer}>
        <Text
          style={
            checked == "checked"
              ? [styles.text, { color: textColor }, styles.linethrough]
              : [styles.text, { color: textColor }]
          }
        >
          {text}
        </Text>
      </View>
      <View style={styles.deleteContainer}>
        <Pressable onPress={handleDeleteItem}>
          <CrossIcon />
        </Pressable>
      </View>
    </View>
  );
};

export default memo(ListItem);

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    height: itemHeight,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "#E6E5EB",
    borderWidth: 1,
  },
  radioButtonContainer: {
    marginHorizontal: "5%",
  },
  textContainer: {
    flex: 0.9,
    justifyContent: "center",
  },
  text: {
    fontFamily: "JosefinSans-Regular",
    fontSize: 16,
  },
  deleteContainer: {
    flex: 0.1,
    paddingLeft: "2.5%",
  },
  linethrough: {
    textDecorationLine: "line-through",
  },
});
