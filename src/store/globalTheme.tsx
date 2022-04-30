import { FC, useState, createContext, useContext } from "react";
import {
  dark,
  light,
  GlobalTheme,
  ChangeThemeType,
  changeTheme,
  initialTheme,
} from "../utils";

const ThemeContext = createContext<GlobalTheme>(initialTheme);

const ChangeThemeContext = createContext<ChangeThemeType>(changeTheme);

const ThemeProvider: FC = ({ children }): JSX.Element => {
  const [globalTheme, setGlobalTheme] = useState<GlobalTheme>(initialTheme);

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
