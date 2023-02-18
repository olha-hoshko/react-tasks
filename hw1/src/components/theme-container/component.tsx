import { FC } from "react";
import { useThemeContext } from "../../context/theme-context";
import { ParentContainerProps } from "../../global-types";

export const ThemeContainer: FC<ParentContainerProps> = ({ children }) => {
  const { themeMode } = useThemeContext();
  return (
    <div className={`App-${themeMode}`}>
      {children}
    </div>
  );
}