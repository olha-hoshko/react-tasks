import { createContext, FC, useContext, useState } from "react";
import { ThemeModes } from "../../enums";
import { ParentContainerProps } from "../../global-types";
import { ThemeContextProps } from "./types";

const defaultThemeContext: ThemeContextProps = {
  themeMode: ThemeModes.light,
  setThemeMode: () => { },
};

const ThemeContext = createContext(defaultThemeContext);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider: FC<ParentContainerProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<string>(ThemeModes.light);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}