import React, { useState, createContext } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./src/containers/Header";
import ListItem from "./src/components/ListItem";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";
import ThemeProvider from "./src/store/globalTheme";
import { imageHeight } from "./src/utils";

const App: React.FC = (): JSX.Element => {
  let [fontsLoaded] = useFonts({
    "JosefinSans-Regular": JosefinSans_400Regular,
    "JosefinSans-Bold": JosefinSans_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Header/>
          {/* Add New To-Do Item */}
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
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    width: "100%",
    height: imageHeight * 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
});
