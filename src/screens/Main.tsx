import { FC } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import ListItem from "../containers/ListItem";
import { imageHeight } from "../utils";

const Main: FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <ListItem isAddNew={true} />
      </View>
      {/* List of To-Do Items */}
      {/* <ListItems /> */}
      {/* <View
        style={{
          backgroundColor: "red",
          flex: .8,
          width: "80%",
          marginTop: "-10%",
          alignSelf: "center",
        }}
      >
      </View> */}
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
});

