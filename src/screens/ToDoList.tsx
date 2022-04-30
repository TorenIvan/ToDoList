import { FC, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Header from "../containers/Header";
import CreateItem from "../containers/CreateItem";
import ListItem from "../containers/ListItem";
import { imageHeight, Item, List } from "../utils";
import ModalAlert from "../components/ModalAlert";
import { useTheme } from "../store/globalTheme";

let itemText = "";

const Main: FC = (): JSX.Element => {
  const [items, setItems] = useState<List>([]);
  const [visibleActionModal, setVisibleActionModal] = useState<boolean>(false);
  const [visibleErrorModal, setVisibleErrorModal] = useState<boolean>(false);

  const { theme } = useTheme();  

  const changeVisibleActionModal = () => {
    setVisibleActionModal(!visibleActionModal);
  };

  const changeVisibleErrorModal = () => {
    setVisibleErrorModal(!visibleErrorModal);
  };

  const handleDeleteItemAttempt = (itemKey: String) => {
    itemText = itemKey.toString();
    changeVisibleActionModal();
  };

  const deleteItem = (itemKey: String) => {
    const newItems = [...items].filter(item => item.text != itemKey);
    setItems(newItems);
  };

  const handleCheckButtonPress = (itemKey: String) => {
    const newItems = [...items];
    const index = newItems.findIndex(item => item.text == itemKey);
    const checked = newItems[index].checked == "checked" ? "unchecked" : "checked";
    newItems[index] = { ...newItems[index], checked: checked };
    setItems(newItems);
  };

  const handleItemSubmit = (item: Item) => {
    if (items.some(element => element.text == item.text)) {
      itemText = item.text.toString();
      changeVisibleErrorModal();
      return;
    }
    setItems(currentItems => [item, ...currentItems]);
  };

  const renderItem = ({ item }: { item: Item }) => {
    return (
      <ListItem
        item={item}
        onDeleteItem={handleDeleteItemAttempt}
        onCheckButtonPress={handleCheckButtonPress}
      />
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.container }]}>
      <View style={styles.header}>
        <Header />
        <CreateItem onSubmit={handleItemSubmit} />
      </View>
      {visibleActionModal && (
        <ModalAlert
          isVisible={visibleActionModal}
          onChangeVisible={changeVisibleActionModal}
          onDeleteItem={deleteItem}
          itemText={itemText}
          type={"action"}
        />
      )}
      {visibleErrorModal && (
        <ModalAlert
          isVisible={visibleErrorModal}
          onChangeVisible={changeVisibleErrorModal}
          onDeleteItem={deleteItem}
          itemText={itemText}
          type={"error"}
        />
      )}
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
