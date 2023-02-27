import { ChangeEvent, FC, FormEventHandler, useState } from "react";
import { useChatContext } from "../../context";

export const SendMessageContainer: FC = () => {
  const { socket, receiver, messageSend } = useChatContext();
  const [message, setMessage] = useState('');
  const [textArea, setTextArea] = useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
    setTextArea(event.target.value);
  }

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
      <form method="post" onSubmit={handleSubmit}>
        <textarea value={textArea} name='message' id='message' placeholder='Write your message here...' onChange={handleChange} />
        <button className='send-message-button'>Send</button>
      </form>
    </div>
  );
}