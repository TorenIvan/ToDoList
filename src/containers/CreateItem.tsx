import { StyleSheet, TextInput, View } from "react-native";
import { RadioButtonValueType, itemHeight, Strings } from "../utils";
import React, { useState } from "react";
import { useTheme } from "../store/globalTheme";
import RadioButton from "../components/RadioButton";

interface Props {
  onSubmit: ({ checked, text }: { checked: RadioButtonValueType; text: String }) => void;
}

const CreateItem: React.FC<Props> = ({ onSubmit }): JSX.Element => {
  const [checked, setChecked] = useState<RadioButtonValueType>(Strings.Unchecked);
  const [newText, setNewText] = useState<String>(Strings.EmptyString);
  const { theme } = useTheme();

  const handleRadioButtonPress = () => {
    setChecked(checked == Strings.Checked ? Strings.Unchecked : Strings.Checked);
  };

  const handleTextChange = (text: String) => {
    setNewText(text);
  };

  const submitItem = () => {
    const text = newText.trim();
    if (text.length > 0) {
      onSubmit({ checked, text });
      setNewText("");
      setChecked(Strings.Unchecked);
    }
  };

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
            checked == Strings.Checked
              ? [styles.textInput, { color: theme.itemTextChecked }, styles.linethrough]
              : [styles.textInput, { color: theme.itemNewText }]
          }
          editable
          maxLength={35}
          multiline={false}
          onChangeText={handleTextChange}
          placeholder={Strings.CreateTodo.toString()}
          placeholderTextColor={theme.itemPlaceholderNewText}
          returnKeyType="done"
          returnKeyLabel="done"
          onSubmitEditing={submitItem}
        >
          {newText}
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