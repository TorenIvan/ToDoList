import { StyleSheet, TextInput, View } from "react-native";
import { RadioButtonValueType, itemHeight } from "../utils";
import React, { useState } from "react";
import { useTheme } from "../store/globalTheme";
import RadioButton from "../components/Buttons/RadioButton";

interface Props {
  onSubmit: ({ checked, text }: { checked: RadioButtonValueType; text: String }) => void;
}

const CreateItem: React.FC<Props> = ({ onSubmit }): JSX.Element => {
  const [checked, setChecked] = useState<RadioButtonValueType>("unchecked");
  const [text, setText] = useState<String>("");
  const { theme } = useTheme();  

  const handleRadioButtonPress = () => {
    setChecked(checked == "checked" ? "unchecked" : "checked");
  };

  const handleTextChange = (text: String) => {
    setText(text);
  };

  const submitItem = () => {
    if (text.trim().length > 0) {
      onSubmit({ checked, text });
      setText("");
      setChecked("unchecked");
    }
  };

  let textColor = theme.itemText;
  if (checked == "checked") textColor = "#B6B5BB";
  return (
    <View style={[styles.itemContainer, { backgroundColor: theme.itemContainer }]}>
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
          style={
            checked == "checked"
              ? [styles.textInput, styles.linethrough, { color: textColor }]
              : [styles.textInput, { color: theme.itemText }]
          }
          editable
          maxLength={35}
          multiline={false}
          onChangeText={handleTextChange}
          placeholder="Create a new todo"
          placeholderTextColor={theme.itemNewText}
          returnKeyType="done"
          returnKeyLabel="done"
          onSubmitEditing={submitItem}
        >
          {text}
        </TextInput>
      </View>
    </View>
  );
};

export default CreateItem;

const styles = StyleSheet.create({
  itemContainer: {
    height: itemHeight,
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
  linethrough: {
    textDecorationLine: "line-through",
  },
});
