import { FC, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Header from "../containers/Header";
import CreateItem from "../containers/CreateItem";
import ListItem from "../containers/ListItem";
import { imageHeight, item, list } from "../utils";

const Main: FC = (): JSX.Element => {
  const [items, setItems] = useState<list>([]);

  const handleItemSubmit = (item: item) => {
    if (items.some(element => element.text == item.text)) {
      console.warn("Item already exists"); //Convert to pop-up modal/alert
      return;
    }
    setItems(currentItems => [item, ...currentItems]);
  };

  const handleDeleteItem = () => {
    console.log("Gonna delete me are you sure?");
  };

  const renderItem = ({ item }: { item: item }) => {
    return <ListItem item={item} onDeleteItem={handleDeleteItem} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <CreateItem onSubmit={handleItemSubmit} />
      </View>
      <FlatList
        style={styles.flatList}
        data={items}
        renderItem={renderItem}
        keyExtractor={item => String(item.text)}
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
    backgroundColor: "#F2F1F6",
  },
  header: {
    width: "100%",
    height: imageHeight * 1.1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  flatList: {
    flex: 0.8,
    width: "85%",
    alignSelf: "center",
    marginTop: "-7.5%",
  },
});
