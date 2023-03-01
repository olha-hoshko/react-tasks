import { ChangeEvent, FC, FormEventHandler, useRef, useState, KeyboardEvent } from "react";
import { useChatContext } from "../../context";

export const SendMessageContainer: FC = () => {
  const { socket, receiver, messageSend } = useChatContext();
  const [message, setMessage] = useState('');
  const [textArea, setTextArea] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
    setTextArea(event.target.value);
  };

  const handleEnterPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && event.shiftKey === false) {
      event.preventDefault();
      formRef.current?.requestSubmit();
    }
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    if (message !== '') {
      socket.emit('private-message', {
        text: message,
        userId: socket.id,
        to: receiver,
      });
    }
    messageSend(socket.id);
    setMessage('');
    setTextArea('');
  };

  return (
    <div className='send-message-container'>
      <form ref={formRef} onSubmit={handleSubmit}>
        <textarea value={textArea} name='message' id='message' placeholder='Write your message here...'
          onChange={handleChange} onKeyDown={handleEnterPress} />
          
        <button className='send-message-button'>Send</button>
      </form>
    </div>
  );
}