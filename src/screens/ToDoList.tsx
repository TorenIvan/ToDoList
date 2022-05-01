import { FC, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Header from "../containers/Header";
import CreateItem from "../containers/CreateItem";
import ListItem from "../containers/ListItem";
import {
  filterListByItem,
  findItemByText,
  modifyItemType,
  imageHeight,
  Item,
  List,
  Strings,
} from "../utils";
import ModalAlert from "../components/ModalAlert";
import { useTheme } from "../store/globalTheme";

let itemText = Strings.EmptyString.toString();

const ToDoList: FC = (): JSX.Element => {
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
    const newItems = filterListByItem(itemKey, items);
    setItems(newItems);
  };

  const handleCheckButtonPress = (itemKey: String) => {
    const newItems = modifyItemType(itemKey, items);
    setItems(newItems);
  };

  const handleItemSubmit = (item: Item) => {
    const itemFound = findItemByText(item.text, items);
    if (itemFound){
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
          type={Strings.Action}
        />
      )}
      {visibleErrorModal && (
        <ModalAlert
          isVisible={visibleErrorModal}
          onChangeVisible={changeVisibleErrorModal}
          onDeleteItem={deleteItem}
          itemText={itemText}
          type={Strings.Error}
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

export default ToDoList;

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
