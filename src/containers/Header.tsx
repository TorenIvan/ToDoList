import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from "react-native";
import {
  lightMobileBackgroundImage,
  darkMobileBackgroundImage,
} from "../assets/index";
import { globalThemeType } from "../utils";
import { imageHeight } from "../utils";

interface Props {
  globalTheme: globalThemeType;
  onThemeChange(): any;
}

const Header: React.FC<Props> = (props): JSX.Element => {
  console.log(props.globalTheme);
  
  return (
    <View style={styles.header}>
      <ImageBackground
        source={
          props.globalTheme.isLight
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
    height: imageHeight,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imageBackground: {
    width: "100%",
    height: imageHeight,
    position: "absolute",
    top: 0,
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
