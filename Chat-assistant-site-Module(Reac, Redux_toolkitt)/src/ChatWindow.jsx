import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleChat,
  addUserMessage,
  sendMessagesAsync,
} from "./features/chatSlice";

const ChatWindow = () => {
  const dispatch = useDispatch();
  // const [messages, setMessages] = useState([]);
  const messages = useSelector((state) => state.chat.messages);
  const isOpen = useSelector((state) => state.chat.isOpen);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUserMessage(input));
    dispatch(sendMessagesAsync(input));
    setInput("");
  };

  return (
    <div className="chat-container">
      <button className="toggle-button" onClick={() => dispatch(toggleChat())}>
        {isOpen ? "Свернуть чат" : "Начать чат с ассистентом"}
      </button>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="chat-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Введите сообщение..."
            />
            <button type="submit">Отправить</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
