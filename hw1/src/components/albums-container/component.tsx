import { FC } from "react";
import { useDataContext } from "../../context/data-context";
import { useThemeContext } from "../../context/theme-context";
import { DataItem } from "../data-item";
import { Albums } from "./types";

export const AlbumsContainer: FC = () => {
  const { data } = useDataContext<Albums>();
  const { themeMode } = useThemeContext();

  return (
    <>
      {
        data.map(({ recordId, title, userId, id }) => (
          <DataItem key={recordId} recordId={recordId}>
            <p className={`album-title text-${themeMode}`}>{title}</p>
            <div className='data-user-id'>
              <p className='small-text'>User's id: {userId}</p>
              <p className='small-text'>Album №: {id}</p>
            </div>
          </DataItem>
        ))
      }
    </>
  );
}