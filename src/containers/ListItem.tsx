import { Pressable, StyleSheet, Text, View } from "react-native";
import { Item, itemHeight, Strings } from "../utils";
import React, { memo } from "react";
import { useTheme } from "../store/globalTheme";
import RadioButton from "../components/RadioButton";
import { CrossIcon } from "../assets";

interface Props {
  item: Item;
  onDeleteItem: (text: String) => void;
  onCheckButtonPress: (text: String) => void;
}

const ListItem: React.FC<Props> = ({ item: { checked, text }, onDeleteItem, onCheckButtonPress }): JSX.Element => {
  const { theme } = useTheme();

  const handleButtonPressed = () => {
    onCheckButtonPress(text.toString());
  };

  const handleDeleteItem = () => {
    onDeleteItem(text.toString());
  };

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: theme.itemContainer, borderColor: theme.itemBorder },
      ]}
    >
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
            checked == Strings.Checked
              ? [styles.text, { color: theme.itemTextChecked }, styles.linethrough]
              : [styles.text, { color: theme.itemText }]
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
