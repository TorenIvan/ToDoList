import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";
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
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;
  return (
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
          <Text
            style={[
              styles.todo,
              {
                color: globalTheme.theme.titleText,
                fontFamily: "JosefinSans_700Bold",
              },
            ]}
          >
            TODO
          </Text>
          <TouchableOpacity onPress={onThemeChange}>
            {globalTheme.isLight ? <MoonIcon /> : <SunIcon />}
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: imageHeight,
    position: "absolute",
    bottom: 0,
    zIndex: -1,
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
  todo: {
    fontSize: 27,
    letterSpacing: 12,
  },
});
