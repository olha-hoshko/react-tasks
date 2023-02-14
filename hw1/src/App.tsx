import './App.css';
import { ButtonsContainer } from './components/buttons-container';
import { DataContainer } from './components/data-container';
import { DefaultButton } from './components/default-button';
import { DataContextProvider } from './context';
import { RequestTypes } from './enums';

function App() {
  return (
    <div className="App">
      <h1>Choose a request</h1>
      <DataContextProvider>
        <ButtonsContainer>
          <DefaultButton requestType={RequestTypes.posts} />
          <DefaultButton requestType={RequestTypes.comments} />
          <DefaultButton requestType={RequestTypes.albums} />
        </ButtonsContainer>
        <ButtonsContainer>
          <DefaultButton requestType={RequestTypes.photos} />
          <DefaultButton requestType={RequestTypes.todos} />
          <DefaultButton requestType={RequestTypes.users} />
        </ButtonsContainer>
        <DataContainer />
      </DataContextProvider>
    </div>
  );
}

export default App;
