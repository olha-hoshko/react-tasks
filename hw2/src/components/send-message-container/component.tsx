import { ChangeEvent, FC, FormEventHandler, useRef, useState, KeyboardEvent } from "react";
import { useChatContext } from "../../context/chat-context";
import { useSocketContext } from "../../context/socket-context";

export const SendMessageContainer: FC = () => {
  const { receiver, messageSend } = useChatContext();
  const { sendMessageToServer, getUserId } = useSocketContext();
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
    sendMessageToServer({message, receiver});
    messageSend(getUserId());
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