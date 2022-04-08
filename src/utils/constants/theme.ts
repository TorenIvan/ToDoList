const primary = {
  brightBlue: "hsl(220, 98%, 61%)",
};

export const dark = {
  ...primary,
  titleText: "hsl(236, 33%, 92%)",
  createNewText: "hsl(234, 39%, 85%)",
  activeText: "hsl(234, 11%, 52%)",
  completedText: "hsl(233, 14%, 35%)",
  // veryDarkBlue: "hsl(235, 21%, 11%)",
  // veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
  lightGrayishBlue: "hsl(234, 39%, 85%)",
  lightGrayishBlueHover: "hsl(236, 33%, 92%)",
  darkGrayishBlue: "hsl(234, 11%, 52%)",
  veryDarkGrayishBlue: "hsl(233, 14%, 35%)",
};

export const light = {
  ...primary,
  titleText: "hsl(0, 0%, 98%)",
  createNewText: "hsl(0, 0%, 98%)",
  activeText: "hsl(236, 9%, 61%)",
  completedText: "hsl(235, 19%, 35%)",
  // veryLightGray: "hsl(0, 0%, 98%)",
  lightGrayishBlueHover: "hsl(236, 33%, 92%)",
  lightGrayishBlue: "hsl(233, 11%, 84%)",
  darkGrayishBlue: "hsl(236, 9%, 61%)",
  veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
};

export const initialTheme = {
  theme: { ...light },
  isLight: true,
};
