declare function changeTheme(): void;
type changeThemeType = typeof changeTheme;

type RadioButtonValueType = "checked" | "unchecked";

type item = {
  isActive: boolean;
  text: String;
};
type list = Array<item> | [];

export { changeTheme, changeThemeType, RadioButtonValueType, item, list };