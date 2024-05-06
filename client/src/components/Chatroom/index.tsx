import { useState, useEffect, useRef } from 'react';
import './index.scss';

type Props = {
    userID: string;
    targetUserID: string;
};

const Chatroom = ({ userID, targetUserID }: Props) => {
    const [messages, setMessages] = useState<any[]>([]);
    const [inputContent, setInputContent] = useState<string>('');
    const [socket, setSocket] = useState<WebSocket | null>(null);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const roomID = [userID, targetUserID].sort().join('');

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputContent(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView();
    };

    const sendMessage = () => {
        if (!socket) return;
        socket.send(
            JSON.stringify({
                type: 'message',
                roomID,
                userID,
                message: inputContent,
            })
        );
        setInputContent('');
    };

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:4646');
        setSocket(ws);

        ws.onopen = () => {
            ws.send(JSON.stringify({ type: 'login', roomID }));
        };

        ws.onmessage = async (event) => {
            const info = JSON.parse(await event.data);
            setMessages((prev) => [...prev, ...info]);
        };

        ws.onclose = () => {
            console.log('前端已斷開 webSocket');
        };

        return () => ws.close();
    }, [roomID]);

    useEffect(() => {
        setMessages([]);
    }, [userID, targetUserID]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div>
            <h5 style={{ marginBottom: '20px' }}>當前聊天室ID是 "{roomID}"</h5>
            <div className="chatroom__content">
                {messages.map((info, index) => (
                    <div
                        className={`chatroom__shell ${userID === info.userID && 'right'}`}
                        key={info.message + index}
                    >
                        <div
                            className={`chatroom__message ${userID === info.userID && 'myself'}`}
                        >
                            {info.message}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div>
                <input
                    className="chatroom__input"
                    type="text"
                    value={inputContent}
                    onChange={changeInput}
                    onKeyDown={handleKeyDown}
                />
                <button className="chatroom__button" onClick={sendMessage}>
                    送出
                </button>
            </div>
        </div>
    );
};

export default Chatroom;
