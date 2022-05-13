import React, { useRef, useState } from 'react';
import './WebSock.css'

const WebSock = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');
  const socket = useRef()
  const [connected, setConnected] = useState(false);
  const [username, setUsername] = useState('')
  const [userId, setUserId] = useState("id" + Math.random().toString(16).slice(2))

  function connect() {
    socket.current = new WebSocket('ws://localhost:5001')

    socket.current.onopen = () => {
      setConnected(true)
      const message = {
        event: 'connection',
        username,
        id: Date.now(), userId
      }
      socket.current.send(JSON.stringify(message))
    }
    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data)
      console.log({message})
      setMessages(prev => [message, ...prev])
    }
    socket.current.onclose = () => {
      console.log('Socket закрыт')
    }
    socket.current.onerror = () => {
      console.log('Socket произошла ошибка')
    }
  }

  const sendMessage = async () => {
    const message = {
      username,
      message: value,
      id: Date.now(),
      event: 'message',
      userId
    }
    socket.current.send(JSON.stringify(message));
    setValue('')
  }


  if (!connected) {
    return (
      <div className="center">
        <div className="form">
          <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            type="text"
            placeholder="Введите ваше имя" />
          <button onClick={connect}>Войти</button>
        </div>
      </div>
    )
  }


  return (
    <div className="center">
      <div className="form">
        <input value={value} onChange={e => setValue(e.target.value)} type="text" />
        <button onClick={sendMessage}>Отправить</button>
      </div>
      <div className='message_container'>


        <div className="messages">
          {messages.map(mess =>
            <div key={mess.id}>
              {mess.event === 'connection'
                ? <div className="connection_message">
                  Пользователь {mess.username} подключился
                </div>
                : (mess.userId === userId 
                    ? <div className="myMessage">
                        <p><strong>{mess.username}</strong> {mess.message}</p>
                      </div>
                    : <div className="otherMessage">
                        <p><strong>{mess.username}</strong> {mess.message}</p>
                      </div>
                  )
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebSock;
