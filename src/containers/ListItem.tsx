import { Pressable, StyleSheet, Text, View } from "react-native";
import { RadioButtonValueType, item } from "../utils";
import React, { useState } from "react";
import { useTheme } from "../store/globalTheme";
import RadioButton from "../components/Buttons/RadioButton";
import { CrossIcon } from "../assets";

interface Props {
  item: item;
}

/***
  Using keyExtractor and unique key, the components re-mounts and as a result
  Derived State is handled using ListItem as fully uncontrolled component
***/

const ListItem: React.FC<Props> = ({ item: { isActive, text } }): JSX.Element => {
  const [checked, setChecked] = useState<RadioButtonValueType>(
    isActive ? "unchecked" : "checked"
  );
  const { theme } = useTheme();

  const handleRadioButtonPress = () => {
    setChecked(checked == "checked" ? "unchecked" : "checked");
  };

  const handleRemoveButtonPress = () => {
    console.log("Gonna delete me are you sure?");
  };

  let textColor = theme.itemContainer;
  if (checked == "checked") textColor = theme.itemContainer;
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
        <Text style={[styles.textInput, { color: theme.itemText }]}>
          {text}
        </Text>
      </View>
      <View style={styles.deleteContainer}>
        <Pressable onPress={handleRemoveButtonPress}>
          <CrossIcon />
        </Pressable>
      </View>
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
  deleteContainer: {
    flex: 0.1,
    paddingLeft: "2.5%",
  },
});
