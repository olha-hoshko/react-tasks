import { useDataContext } from "../../context";
import { RequestTypes } from "../../enums";
import { AlbumsContainer } from "../albums-container";
import { CommentsContainer } from "../comments-container";
import { DataItem } from "../data-item";
import { DeleteButton } from "../delete-button";
import { PostsContainer } from "../posts-container";

export const DataContainer = () => {
  const { requestType, data } = useDataContext();

  return (
    <div className='data-container'>
      <div>
        {
          requestType === RequestTypes.posts && <PostsContainer data={data} />
        }
        {
          requestType === RequestTypes.comments && <CommentsContainer data={data} />
        }
        {
          requestType === RequestTypes.albums && <AlbumsContainer data={data} />
        }
        {
          (requestType === RequestTypes.photos || requestType === RequestTypes.todos || requestType === RequestTypes.users) &&
          data.map((elem, index) => (
            <DataItem index={index} key={index}>
              <p className='post-body'>{JSON.stringify(elem)}</p>
              <DeleteButton data={data} />
            </DataItem>
          ))
        }
      </div>
    </div>
  );
};