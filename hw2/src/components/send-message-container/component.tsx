import { ChangeEvent, FC, FormEventHandler, useRef, useState, KeyboardEvent, useEffect } from "react";
import { useChatContext } from "../../context/chat-context";
import { useSocketContext } from "../../context/socket-context";

export const SendMessageContainer: FC = () => {
  const { receiver, messageSend } = useChatContext();
  const { sendMessageToServer, getUserId } = useSocketContext();
  const [message, setMessage] = useState('');
  const [textArea, setTextArea] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
    setTextArea(event.target.value);
    event.target.style.height = event.target.scrollHeight + 'px';
  };

  const handleEnterPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && event.shiftKey === false) {
      event.preventDefault();
      formRef.current?.requestSubmit();
    }
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    sendMessageToServer({ message, receiver });
    messageSend(getUserId());
    setMessage('');
    setTextArea('');
    if(textareaRef.current) {
      textareaRef.current.style.height = '60px';
    }
  };

  return (
    <div className='send-message-container'>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className='textarea-container'>
          <textarea ref={textareaRef} value={textArea} name='message' id='message' placeholder='Write your message here...'
            onChange={handleChange} onKeyDown={handleEnterPress} />

          <button className='send-message-button'></button>
        </div>
      </form>
    </div>
  );
}