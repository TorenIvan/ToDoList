declare function changeTheme(): void;
type changeThemeType = typeof changeTheme;

type RadioButtonValueType = "checked" | "unchecked";

type PopUpAlert = "error" | "action";

type item = {
  checked: RadioButtonValueType;
  text: String;
};
type list = Array<item> | [];

export { changeTheme, changeThemeType, RadioButtonValueType, PopUpAlert, item, list };