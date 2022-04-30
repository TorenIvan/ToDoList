declare function changeTheme(): void;
type ChangeThemeType = typeof changeTheme;

type RadioButtonValueType = "checked" | "unchecked";

type PopUpAlert = "error" | "action";

type Item = {
  checked: RadioButtonValueType;
  text: String;
};
type List = Array<Item> | [];

export { changeTheme, ChangeThemeType, RadioButtonValueType, PopUpAlert, Item, List };