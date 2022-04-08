import { FC, useState, createContext, useContext } from "react";
import {
  theme,
  dark,
  light,
  globalThemeType,
  changeThemeType,
  changeTheme,
} from "../utils";

const ThemeContext = createContext<globalThemeType>({
  theme: light,
  isLight: true,
});

const ChangeThemeContext = createContext<changeThemeType>(changeTheme);

const ThemeProvider: FC = ({ children }): JSX.Element => {
  const [globalTheme, setGlobalTheme] = useState<globalThemeType>({
    theme: theme,
    isLight: true,
  });

  const changeTheme = () => {
    setGlobalTheme({
      theme: globalTheme.isLight ? { ...dark } : { ...light },
      isLight: !globalTheme.isLight,
    });
  };

  return (
    <ThemeContext.Provider value={globalTheme}>
      <ChangeThemeContext.Provider value={changeTheme}>
        {children}
      </ChangeThemeContext.Provider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

const useChangeTheme = () => {
  return useContext(ChangeThemeContext);
};

export { useTheme, useChangeTheme, ThemeProvider as default };
