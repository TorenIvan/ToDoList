import { dark, light } from "./constants/theme";
import { changeTheme, changeThemeType, RadioButtonValueType, item, list } from "./constants/types";
import Strings from "./constants/strings";

/*** Enums ***/
export { Strings };

/*** Types ***/
type Theme = typeof light | typeof dark;

type globalThemeType = {
  isLight: boolean;
  theme: Theme;
};

export { globalThemeType, changeThemeType, changeTheme, Theme, RadioButtonValueType, item, list };

/*** Metrics ***/
export { imageHeight } from "./constants/dimensions";

/*** Themes ***/
const initialTheme: globalThemeType = {
  theme: { ...light },
  isLight: true,
};

export { dark, light, initialTheme };
