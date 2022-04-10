import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { RadioButtonValueType } from "../utils";
import React, { useState } from "react";
import { useTheme } from "../store/globalTheme";
import RadioButton from "../components/Buttons/RadioButton";
import { CrossIcon } from "../assets";

interface Props {
  isActive?: boolean;
  isAddNew?: boolean;
}

const ListItem: React.FC<Props> = ({
  isActive = false,
  isAddNew = false,
}): JSX.Element => {
  const [checked, setChecked] = useState<RadioButtonValueType>("unchecked");
  const [text, setText] = useState<String>("");
  const { theme } = useTheme();

  let textColor = theme.itemContainer;
  if (isAddNew) textColor = theme.itemContainer;
  if (isActive) textColor = theme.itemContainer;

  const handleRadioButtonPress = () => {
    setChecked(checked == "checked" ? "unchecked" : "checked");
  };

  const handleRemoveButtonPress = () => {
    console.log("Gonna delete me are you sure?");
  };

  const handleTextChange = (text: String) => {
    setText(text);
  };

  return (
    <View style={[styles.itemContainer, { backgroundColor: textColor }]}>
      <View style={styles.radioButtonContainer}>
        <RadioButton
          value={checked}
          onRadioButtonPress={handleRadioButtonPress}
          checkedColor={theme.backgroundRadioButton}
          borderColor={theme.borderRadioButton}
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={[styles.textInput, { color: theme.itemText }]}
          editable
          maxLength={35}
          onChangeText={handleTextChange}
          placeholder="Create a new todo"
          placeholderTextColor={theme.itemNewText}
        >
          {text}
        </TextInput>
      </View>
      {!isAddNew && (
        <View style={{ flex: 0.1, paddingLeft: "2.5%", }}>
          <Pressable onPress={handleRemoveButtonPress}>
            <CrossIcon />
          </Pressable>
        </View>
      )}
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
  radioButtonContainer: {
    marginHorizontal: "5%",
  },
  textInputContainer: {
    flex: 0.9,
  },
  textInput: {
    fontFamily: "JosefinSans-Regular",
    fontSize: 16,
  },
});
