import { FC } from "react";
import { useThemeContext } from "../../context/theme-context";
import { DeleteButton } from "../delete-button";
import { DataItemProps } from "./types";

export const DataItem: FC<DataItemProps> = ({ children, recordId }) => {
  const {themeMode} = useThemeContext();

  return (
    <div className={`data-${themeMode}`}>
      {children}
      <DeleteButton recordId={recordId}/>
    </div>
  );
};