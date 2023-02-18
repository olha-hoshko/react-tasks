import './App.css';
import { ButtonsContainer } from './components/buttons-container';
import { DataContainer } from './components/data-container';
import { DefaultButton } from './components/default-button';
import { PageTitle } from './components/page-title';
import { ThemeChangeButton } from './components/theme-change-button/component';
import { ThemeContainer } from './components/theme-container';
import { DataContextProvider } from './context/data-context';
import { ThemeContextProvider } from './context/theme-context';
import { RequestTypes } from './enums';

function App() {
  return (
    <ThemeContextProvider>
      <ThemeContainer>
        <PageTitle />
        <ThemeChangeButton />
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
      </ThemeContainer>
    </ThemeContextProvider>
  );
}

export default App;
