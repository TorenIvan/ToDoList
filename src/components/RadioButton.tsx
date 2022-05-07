import { StyleSheet, Pressable } from "react-native";
import { FC, memo } from "react";
import { RadioButtonValueType, Strings } from "../utils";
import { CheckIcon } from "../assets";

interface Props {
  testId: string,
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
        value == Strings.Checked
          ? [styles.circle, { borderColor: borderColor, backgroundColor: checkedColor }]
          : [styles.circle, { borderColor: borderColor }]
      }
      onPress={handlePress}
    >
      {value == Strings.Checked && <CheckIcon />}
    </Pressable>
  );
};

export default memo(RadioButton);

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
