import { useState } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import Header from "./src/containers/Header";

const App = (): JSX.Element => {
  const [theme, setTheme] = useState<{isLightBackgroundImage: boolean, }>({isLightBackgroundImage: true});
  return (
    <View style={styles.container}>
      <Header
        lightBackgroundImage={true}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
