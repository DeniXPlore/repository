import { useState } from 'react';


const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false); // Состояние для видимости чата

  const sendMessage = async (message) => {
    if (!message) return;

    const newMessage = { text: message, sender: 'user' };
    setMessages([...messages, newMessage]);

    try {
      const response = await fetch('YOUR_BACKEND_API_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      setMessages([...messages, newMessage, { text: data.reply, sender: 'bot' }]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
    setInput('');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-container">
      <button className="toggle-button" onClick={toggleChat}>
        {isOpen ? 'Свернуть' : 'Развернуть'}
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