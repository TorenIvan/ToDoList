import { FlatList, StyleSheet } from "react-native";
import React from "react";

const ListItems = ({}) => {
  return <FlatList style={styles.flatList} data={items} renderItem={renderItem} />;
};

export default ListItems;

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: "red",
    flex: 0.8,
    width: "80%",
    marginTop: "-10%",
    alignSelf: "center",
  },
});
