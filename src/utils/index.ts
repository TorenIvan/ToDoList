/* Types */
import { dark, light } from "./constants/theme";

type Theme = typeof light | typeof dark;
const theme: Theme = { ...light };

type globalThemeType = {
  isLight: boolean;
  theme: Theme;
};

export { theme, dark, light, globalThemeType };


/* Metrics */
export { imageHeight } from "./constants/dimensions";