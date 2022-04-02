import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
import {
  lightMobileBackgroundImage,
  darkMobileBackgroundImage,
} from "../assets/index";
import { Theme } from "../utils/constants/theme";

type theming = {
  isLight: boolean;
  theme: Theme;
}

interface Props {
  theming: theming;
  onThemeChange(): any;
}

const Header: React.FC<Props> = (props): JSX.Element => {
  console.log(props.theming);
  
  return (
    <View style={styles.header}>
      <ImageBackground
        source={
          props.theming.isLight
            ? lightMobileBackgroundImage
            : darkMobileBackgroundImage
        }
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.titleContainer}>
          <View style={styles.title}>
            <Text>TODO</Text>
            <Text>ajghb</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: Dimensions.get("window").height * 0.3,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imageBackground: {
    width: "100%",
    height: Dimensions.get("window").height * 0.3,
    position: "absolute",
    top: 0.1 * Dimensions.get("window").height * 0.3,
  },
  imageStyle: {
    resizeMode: "cover",
  },
  titleContainer: {
    flex: 0.4,
    marginLeft: "5%",
    marginRight: "5%",
    justifyContent: "flex-end",
  },
  title: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
