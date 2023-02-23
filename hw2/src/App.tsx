import './App.css';
import { io } from 'socket.io-client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChatPage } from './components/chat-page/component';

const socket = io('http://localhost:8080');

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ChatPage socket={socket} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
