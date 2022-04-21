declare function changeTheme(): void;
type changeThemeType = typeof changeTheme;

type RadioButtonValueType = "checked" | "unchecked";

type item = {
  checked: RadioButtonValueType;
  text: String;
};
type list = Array<item> | [];

export { changeTheme, changeThemeType, RadioButtonValueType, item, list };