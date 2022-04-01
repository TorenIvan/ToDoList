// export { faviconIcon } from "./icons/favicon.png";

// export { checkIcon } from "./icons/icon-check.svg";

// export { crossIcon } from "./icons/icon-cross.svg";

// export { moonIcon } from "./icons/icon-moon.svg";

// export { sunIcon } from "./icons/icon-sun.svg";

// export { darkDesktopBackgroundImage } from "./images/bg-desktop-dark.jpg";

// export { lightDesktopBackgroundImage } from "./images/bg-desktop-light.jpg";

// export { darkMobileBackgroundImage } from "./images/bg-mobile-dark.jpg";

// export { lightMobileBackgroundImage } from "./images/bg-mobile-light.jpg";

declare module "*.jpg" {
  import { ImageSourcePropType } from "react-native";

  const content: ImageSourcePropType;

  export default content;
}
declare module "*.png" {
  import { ImageSourcePropType } from "react-native";

  const content: ImageSourcePropType;

  export default content;
}
declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";

  const content: React.FC<SvgProps>;

  export default content;
}
