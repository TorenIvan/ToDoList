import { dark, light } from "./constants/theme";
import { changeTheme, ChangeThemeType, RadioButtonValueType, PopUpAlert, Item, List } from "./constants/types";
import Strings from "./constants/strings";
import filterListByItem from "./helpers/filterListByItem";
import modifyItemType from "./helpers/modifyItemType";
import findItemByText from "./helpers/findItemByText";

/*** Enums ***/
export { Strings };

/*** Types ***/
type Theme = typeof light | typeof dark;

type GlobalTheme = {
  isLight: boolean;
  theme: Theme;
};

export { GlobalTheme, ChangeThemeType, changeTheme, Theme, RadioButtonValueType, PopUpAlert, Item, List };

/*** Metrics ***/
export { imageHeight, itemHeight } from "./constants/dimensions";

/*** Themes ***/
const initialTheme: GlobalTheme = {
  theme: { ...light },
  isLight: true,
};

export { dark, light, initialTheme };

/*** Helper Functions ***/
export { filterListByItem, modifyItemType, findItemByText }
