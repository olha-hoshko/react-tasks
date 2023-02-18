import { FC } from "react";
import { useThemeContext } from "../../context/theme-context";

export const PageTitle: FC = () => {
  const { themeMode } = useThemeContext();
  return (
    <h1 className={`h1-${themeMode}`}>Choose a request</h1>
  );
}