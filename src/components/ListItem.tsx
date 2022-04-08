import { StyleSheet, Text, View } from "react-native";
import { Theme, RadioButtonValueType } from "../utils";
import React, { useState } from "react";
import { useTheme } from "../store/globalTheme";
import RadioButton from "./Buttons/RadioButton";

interface Props {
  isActive?: boolean;
  isAddNew?: boolean;
}

const ListItem: React.FC<Props> = ({ isActive = false, isAddNew = false }): JSX.Element => {
  const [checked, setChecked] = useState<RadioButtonValueType>("checked");
  const { theme } = useTheme();

  let textColor = theme.completedText;
  if (isAddNew) textColor = theme.createNewText;
  if (isActive) textColor = theme.activeText;

  const handleRadioButtonPress = () => {
    setChecked(checked == "checked" ? "unchecked" : "checked");
  };

  return (
    <View style={[styles.itemContainer, { backgroundColor: textColor }]}>
      <RadioButton
        value={checked}
        onRadioButtonPress={handleRadioButtonPress}
        checkedColor={theme.veryDarkGrayishBlue}
        borderColor={theme.lightGrayishBlue}
      />
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
    justifyContent: "space-around",
    alignItems: "center",
  },
});
