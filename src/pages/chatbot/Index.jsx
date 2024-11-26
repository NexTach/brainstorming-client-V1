import React, { useState } from 'react';
import axios from 'axios';
import { CHATGPT_API_KEY } from '../../shared/api/ChatGPT';
import { Colors } from '../../shared/UI/Colors';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setIsLoading(true);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [...messages, userMessage],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${CHATGPT_API_KEY}`,
          },
        },
      );

      const chatbotMessage = response.data.choices[0].message;
      setMessages([...messages, userMessage, chatbotMessage]);
    } catch (error) {
      let errorMessageContent = '챗봇 응답 중 오류가 발생했습니다.';

      if (error.response) {
        switch (error.response.status) {
          case 429:
            errorMessageContent =
              '요청 한도를 초과했습니다. 잠시 후 다시 시도해주세요.';
            break;
          case 401:
            errorMessageContent = 'API 키가 유효하지 않습니다.';
            break;
          default:
            errorMessageContent = `오류가 발생했습니다. (${error.response.status})`;
        }
      }

      console.error('Error:', error);
      const errorMessage = {
        role: 'system',
        content: errorMessageContent,
      };
      setMessages([...messages, userMessage, errorMessage]);
    } finally {
      setIsLoading(false);
      setInput('');
    }
  };

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1>Chatbot</h1>
      <div
        style={{
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '10px',
          height: '400px',
          overflowY: 'scroll',
          marginBottom: '10px',
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              marginBottom: '10px',
              textAlign: message.role === 'user' ? 'right' : 'left',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                padding: '10px',
                borderRadius: '10px',
                backgroundColor:
                  message.role === 'user' ? Colors.MAIN_COLOR : '#f1f1f1',
                color: message.role === 'user' ? '#fff' : '#000',
                maxWidth: '70%',
              }}
            >
              {message.content}
            </span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && sendMessage()}
        placeholder="Type your message..."
        style={{
          width: 'calc(100% - 100px)',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ddd',
          marginRight: '10px',
        }}
      />
      <button
        onClick={sendMessage}
        style={{
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#007bff',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        Send
      </button>
    </div>
  );
};

export default Chatbot;
