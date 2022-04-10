import { FlatList, StyleSheet } from "react-native";
import React from "react";

const List = ({}) => {
  // return <FlatList style={styles.flatList} renderItem={} />;
};

export default List;

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: "red",
    flex: 0.8,
    width: "80%",
    marginTop: "-10%",
    alignSelf: "center",
  },
});
