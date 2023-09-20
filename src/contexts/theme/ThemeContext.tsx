import themeConfig from "../../theme.config";
import { ReactNode, createContext, useContext, useState } from "react";
import { ITheme, IThemeContext, IThemeType } from "./theme";

export const Theme: { DARK: ITheme; LIGHT: ITheme } = {
   DARK: themeConfig.theme.dark,
   LIGHT: themeConfig.theme.light,
};

const ThemeType: IThemeType = {
   DARK: "dark",
   LIGHT: "light",
};

const initialState: IThemeContext = {
   theme: Theme.DARK,
   setTheme: () => {},
   toggleTheme: () => {},
};

interface ThemeContextProviderProps {
   children?: ReactNode;
}

const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }: ThemeContextProviderProps) => {
   const [theme, setTheme] = useState<ITheme>(Theme.DARK);

   const toggleTheme = () => {
      if (theme?.type === ThemeType.DARK) setTheme(Theme.LIGHT);
      else setTheme(Theme.DARK);
   };

   const themeContextValue: IThemeContext = {
      theme,
      setTheme,
      toggleTheme,
   };

   return (
      <ThemeContext.Provider value={themeContextValue}>
         <div className={theme.backgroundColor.default}>{children}</div>
      </ThemeContext.Provider>
   );
};

const useTheme = () => {
   return useContext(ThemeContext);
};

export { ThemeContext, ThemeProvider, useTheme, ThemeType };
