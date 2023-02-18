import { FC, MouseEventHandler } from "react";
import { useThemeContext } from "../../context/theme-context";
import { ThemeModes } from "../../enums";

export const ThemeChangeButton: FC = () => {
  const { themeMode, setThemeMode } = useThemeContext();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    switch (themeMode) {
      case ThemeModes.dark:
        setThemeMode(ThemeModes.light);
        break;
      case ThemeModes.light:
        setThemeMode(ThemeModes.dark);
        break;
    }
  }

  return (
    <button className='theme-changer-button' onClick={handleClick}>Change theme</button>
  );
};