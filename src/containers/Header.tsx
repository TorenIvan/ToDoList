import React, { memo } from "react";
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from "react-native";
import {
  lightMobileBackgroundImage,
  darkMobileBackgroundImage,
  SunIcon,
  MoonIcon,
} from "../assets/index";
import { imageHeight, Strings } from "../utils";
import { useChangeTheme, useTheme } from "../store/globalTheme";

const Header: React.FC = (): JSX.Element => {
  const { theme, isLight } = useTheme();
  const onThemeChange = useChangeTheme();

  return (
    <ImageBackground
      source={
        isLight ? lightMobileBackgroundImage : darkMobileBackgroundImage
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
                color: theme.titleText,
                fontFamily: "JosefinSans-Bold",
              },
            ]}
          >
            {Strings.Todo}
          </Text>
          <TouchableOpacity onPress={onThemeChange}>
            {isLight ? <MoonIcon /> : <SunIcon />}
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default memo(Header);

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
