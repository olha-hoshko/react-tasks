import { useDataContext } from "../../context/data-context";
import { useThemeContext } from "../../context/theme-context";
import { RequestTypes } from "../../enums";
import { AlbumsContainer } from "../albums-container";
import { CommentsContainer } from "../comments-container";
import { DefaultRequestItemContainer } from "../default-request-item-container";
import { PostsContainer } from "../posts-container";

export const DataContainer = () => {
  const { requestType } = useDataContext();
  const { themeMode } = useThemeContext();

  const switchRequestItem = () => {
    switch (requestType) {
      case RequestTypes.posts:
        return <PostsContainer />;
      case RequestTypes.comments:
        return <CommentsContainer />
      case RequestTypes.albums:
        return <AlbumsContainer />
      case RequestTypes.photos:
      case RequestTypes.todos:
      case RequestTypes.users:
        return <DefaultRequestItemContainer />
    }
  }

  return (
    <div className={`data-container-${themeMode}`}>
      <div>
        {
          switchRequestItem()
        }
      </div>
    </div>
  );
};