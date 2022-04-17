import { FC, useCallback, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import CreateItem from "../containers/CreateItem";
import ListItem from "../containers/ListItem";
import { imageHeight, item, list } from "../utils";

const Main: FC = (): JSX.Element => {
  const [items, setItems] = useState<list>(null);

  const handleItemSubmit = (item: item) => {
    // setItems(item);
  };

  const renderItem = ({ item }: { item: item }) => {
    return <ListItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <CreateItem onSubmit={handleItemSubmit} />
      </View>
      {/* List of To-Do Items */}
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    width: "100%",
    height: imageHeight * 1.1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  flatList: {
    backgroundColor: "red",
    flex: 0.8,
    width: "80%",
    marginTop: "-10%",
    alignSelf: "center",
  },
});
