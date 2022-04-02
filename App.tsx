import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
import { lightDesktopBackgroundImage } from "./src/assets/index";

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={lightDesktopBackgroundImage}
          style={styles.imageBackground}
          imageStyle={styles.imageStyle}
        >
          <View style={styles.header}>
            <View style={styles.title}>
              <Text>TODO</Text>
              <Text>ajghb</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  imageContainer: {
    margin: 0,
    padding: 0,
    height: Dimensions.get('window').height * .3,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imageBackground: {
    width: "100%",
    height: Dimensions.get('window').height * .3,
    position: "absolute",
    top: 0.1 * Dimensions.get('window').height * .3,
  },
  imageStyle: {
    resizeMode: "cover",
  },
  header: {
    flex: .4,
    marginLeft: "5%",
    marginRight: "5%",
    justifyContent: "flex-end",
  },
  title: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  }
});
