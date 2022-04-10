declare function changeTheme(): void;
type changeThemeType = typeof changeTheme;

type RadioButtonValueType = "checked" | "unchecked";

export { changeTheme, changeThemeType, RadioButtonValueType };