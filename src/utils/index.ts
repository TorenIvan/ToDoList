/* Types */
import { dark, light } from "./constants/theme";

type Theme = typeof light | typeof dark;

type globalThemeType = {
  isLight: boolean;
  theme: Theme;
};

type RadioButtonValueType = "checked" | "unchecked";

export { globalThemeType, Theme, RadioButtonValueType };

/* Metrics */
export { imageHeight } from "./constants/dimensions";

/* Themes */
const theme: Theme = { ...light };

export { dark, light, theme };
