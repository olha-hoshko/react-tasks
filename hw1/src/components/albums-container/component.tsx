import { FC } from "react";
import { DataItem } from "../data-item";
import { DeleteButton } from "../delete-button";
import { Albums, AlbumsContainerProps } from "./types";

export const AlbumsContainer: FC<AlbumsContainerProps> = ({ data }) => {
  return (
    <>
      {
        data.map((album: Albums, index) => (
          <DataItem index={index} key={index}>
            <p className='album-title'>{album.title}</p>
            <div className='data-user-id'>
              <p className='small-text'>User's id: {album.userId}</p>
              <p className='small-text'>Album №: {album.id}</p>
            </div>
            <DeleteButton data={data} />
          </DataItem>
        ))
      }
    </>
  );
}