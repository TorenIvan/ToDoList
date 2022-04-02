import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  lightMobileBackgroundImage,
  darkMobileBackgroundImage,
  SunIcon,
  MoonIcon,
} from "../assets/index";
import { globalThemeType } from "../utils";
import { imageHeight } from "../utils";

interface Props {
  globalTheme: globalThemeType;
  onThemeChange(): any;
}

const Header: React.FC<Props> = ({ globalTheme, onThemeChange }): JSX.Element => {
  return (
    <View style={styles.header}>
      <ImageBackground
        source={
          globalTheme.isLight
            ? lightMobileBackgroundImage
            : darkMobileBackgroundImage
        }
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.titleContainer}>
          <View style={styles.title}>
            <Text>TODO</Text>
            <TouchableOpacity onPress={onThemeChange}>
              {globalTheme.isLight 
                ? <MoonIcon />
                : <SunIcon />}
            </TouchableOpacity>
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
    flex: 0.35,
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
