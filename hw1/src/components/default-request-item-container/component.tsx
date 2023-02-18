import { FC } from "react";
import { useDataContext } from "../../context/data-context";
import { useThemeContext } from "../../context/theme-context";
import { DataItem } from "../data-item";

export const DefaultRequestItemContainer: FC = () => {
  const { data } = useDataContext<any>();
  const { themeMode } = useThemeContext();

  return (
    <>
      {
        data.map(({ recordId, ...element }) => (
          <DataItem key={recordId} recordId={recordId}>
            <p className={`post-body text-${themeMode}`}>{JSON.stringify(element)}</p>
          </DataItem>
        ))
      }
    </>
  );
}