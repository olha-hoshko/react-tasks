import { createContext, useContext, useEffect, useState } from 'react';
import './App.css';

type DataContainerProps = {
  requestType: string,
  setRequestType: (type: string) => void,
}

const defaultContext = { requestType: '', setRequestType: () => { } };
const Context = createContext<DataContainerProps>(defaultContext);

type Post = {
  userId: number,
  id: number,
  title: string,
  body: string,
}

const ShowPosts = ({ data }: { data: [] }) => {
  return (
    <>
      {
        data.map((post: Post, index) => (
          <div className='data' key={index}>
            <p className='post-title'>{post.title}</p>
            <p className='post-body'>{post.body}</p>
            <div className='data-user-id'>
              <p className='small-text'>User's id: {post.userId}</p>
              <p className='small-text'>Post №{post.id}</p>
            </div>
          </div>
        ))
      }
    </>
  );
}

type Comments = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

const ShowComments = ({ data }: { data: [] }) => {
  return (
    <>
      {
        data.map((comment: Comments, index) => (
          <div className='data' key={index}>
            <p className='comment-email'>{comment.email}</p>
            <p className='comment-title'>{comment.name}</p>
            <p className='comment-body'>{comment.body}</p>
            <div className='data-comment-post'>
              <p className='small-text'>Post №: {comment.postId}</p>
              <p className='small-text'>Comment's id: {comment.id}</p>
            </div>
          </div>
        ))
      }
    </>
  );
}

type Albums = {
  userId: number,
  id: number,
  title: string,
}

const ShowAlbums = ({ data }: { data: [] }) => {
  return (
    <>
      {
        data.map((album: Albums, index) => (
          <div className='data' key={index}>
            <p className='album-title'>{album.title}</p>
            <div className='data-user-id'>
              <p className='small-text'>User's id: {album.userId}</p>
              <p className='small-text'>Album №: {album.id}</p>
            </div>
          </div>
        ))
      }
    </>
  );
}

const DataContainer = () => {
  const [data, setData] = useState<[]>([]);
  const { requestType } = useContext(Context);

  useEffect(() => {
    if (requestType !== '') {
      fetch(`https://jsonplaceholder.typicode.com/${requestType}`)
        .then((response) => response.json())
        .then(setData);
    }
  }, [requestType]);

  return (
    <div className='data-container'>
      <div>
        {
          requestType === 'posts' && <ShowPosts data={data} />
        }
        {
          requestType === 'comments' && <ShowComments data={data} />
        }
        {
          requestType === 'albums' && <ShowAlbums data={data} />
        }
        {
          data.map((elem, index) => (
            <div className='data' key={index}>
              <p className='post-body'>{JSON.stringify(elem)}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

const Button = ({ name }: { name: string }) => {
  const { setRequestType } = useContext(Context);
  const newRequestType = name.toLowerCase();

  return (
    <button onClick={() => setRequestType(newRequestType)}>{name}</button>
  );
};

function App() {
  const [request, setRequest] = useState('');

  return (
    <div className="App">
      <h4>Choose a request</h4>
      <Context.Provider value={{ requestType: request, setRequestType: setRequest }}>
        <div className='buttons_container'>
          <Button name='Posts' />
          <Button name='Comments' />
          <Button name='Albums' />
        </div>
        <div className='buttons_container'>
          <Button name='Photos' />
          <Button name='Todos' />
          <Button name='Users' />
        </div>
        <DataContainer />
      </Context.Provider>
    </div>
  );
}

export default App;
