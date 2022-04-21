import { Pressable, StyleSheet, Text, View } from "react-native";
import { item, itemHeight, RadioButtonValueType } from "../utils";
import React, { useState, useEffect } from "react";
import { useTheme } from "../store/globalTheme";
import RadioButton from "../components/Buttons/RadioButton";
import { CrossIcon } from "../assets";

interface Props {
  item: item;
  onDeleteItem: () => void;
}

/***
  Derived State is handled using 
    * Unique key(text) to re-mount the list item
    * Initial State related based on prop `checked`
***/

const ListItem: React.FC<Props> = ({ item: { checked, text }, onDeleteItem }): JSX.Element => {
  const { theme } = useTheme();
  const [itemChecked, setItemChecked] = useState<RadioButtonValueType>(checked);

  const handleButtonPressed = () => {
    setItemChecked(itemChecked == "checked" ? "unchecked" : "checked");
  };

  let textColor = "#717287";
  if (itemChecked == "checked") textColor = "#B6B5BB";
  return (
    <View style={[styles.itemContainer, { backgroundColor: "#FFFFFF" }]}>
      <View style={styles.radioButtonContainer}>
        <RadioButton
          value={itemChecked}
          onRadioButtonPress={handleButtonPressed}
          checkedColor={theme.backgroundRadioButton}
          borderColor={theme.borderRadioButton}
        />
      </View>
      <View style={styles.textContainer}>
        <Text
          style={
            itemChecked == "checked"
              ? [styles.text, { color: textColor }, styles.linethrough]
              : [styles.text, { color: textColor }]
          }
        >
          {text}
        </Text>
      </View>
      <View style={styles.deleteContainer}>
        <Pressable onPress={onDeleteItem}>
          <CrossIcon />
        </Pressable>
      </View>
    </View>
  );
};

export default ListItem;

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
