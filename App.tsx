import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { lightDesktopBackgroundImage } from "./src/assets/index";

const App = () : JSX.Element => {  
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={lightDesktopBackgroundImage}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={styles.header}>
          <Text>TODO</Text>
          <Text>ajghb</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    flex: .4,
    width: "100%",
    justifyContent: "flex-start",
  },
  header: {
    flex: .5,
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center"
  },
});
