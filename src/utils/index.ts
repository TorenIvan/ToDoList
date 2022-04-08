/*** Types ***/
import { dark, light } from "./constants/theme";

type Theme = typeof light | typeof dark;

type globalThemeType = {
  isLight: boolean;
  theme: Theme;
};

declare function changeTheme(): void;
type changeThemeType = typeof changeTheme;

type RadioButtonValueType = "checked" | "unchecked";

export { globalThemeType, changeThemeType, changeTheme, Theme, RadioButtonValueType };

/*** Metrics ***/
export { imageHeight } from "./constants/dimensions";

/*** Themes ***/
const initialTheme: globalThemeType = {
  theme: { ...light },
  isLight: true,
};
export { dark, light, initialTheme };
