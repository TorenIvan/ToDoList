import { StyleSheet, Text, View, Pressable } from "react-native";
import { FC } from "react";
import { RadioButtonValueType } from "../../utils";
import { CheckIcon } from "../../assets";

interface Props {
  value: RadioButtonValueType;
  onRadioButtonPress(): void;
  borderColor: string;
  checkedColor: string;
}

const RadioButton: FC<Props> = (props): JSX.Element => {
  const { value, onRadioButtonPress, borderColor, checkedColor } = props;
  const handlePress = () => onRadioButtonPress();
  return (
    <Pressable
      style={
        value == "checked"
          ? [styles.circle, { borderColor: borderColor, backgroundColor: checkedColor }]
          : [styles.circle, { borderColor: borderColor }]
      }
      onPress={handlePress}
    >
      {value == "checked" && <CheckIcon />}
    </Pressable>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  circle: {
    height: 25,
    width: 25,
    borderRadius: 110,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
