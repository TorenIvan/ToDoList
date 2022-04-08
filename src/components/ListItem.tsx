import { StyleSheet, Text, TextInput, View } from "react-native";
import { RadioButtonValueType } from "../utils";
import React, { useState } from "react";
import { useTheme } from "../store/globalTheme";
import RadioButton from "./Buttons/RadioButton";

interface Props {
  isActive?: boolean;
  isAddNew?: boolean;
}

const ListItem: React.FC<Props> = ({ isActive = false, isAddNew = false }): JSX.Element => {
  const [checked, setChecked] = useState<RadioButtonValueType>("checked");
  const [text, setText] = useState<String>("");
  const { theme } = useTheme();

  let textColor = theme.completedText;
  if (isAddNew) textColor = theme.createNewText;
  if (isActive) textColor = theme.activeText;

  const handleRadioButtonPress = () => {
    setChecked(checked == "checked" ? "unchecked" : "checked");
  };

  const handleTextChange = (text: String) => {
    setText(text);
  };

  return (
    <View style={[styles.itemContainer, { backgroundColor: textColor }]}>
      <View style={styles.divider} />
      <RadioButton
        value={checked}
        onRadioButtonPress={handleRadioButtonPress}
        checkedColor={theme.veryDarkGrayishBlue}
        borderColor={theme.lightGrayishBlue}
      />
      <View style={styles.divider} />
      <TextInput
        style={{ color: "black" }}
        editable
        maxLength={30}
        onChangeText={handleTextChange}
        placeholder={"Create a new todo"}
      >
        {text}
      </TextInput>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  itemContainer: {
    height: "25%",
    width: "85%",
    marginTop: "16%",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  divider: {
    flex: 0.1,
  },
});
