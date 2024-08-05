import React, { useEffect, useState, useRef } from 'react';

const WebSocketComponent = () => {
    const authToken = 'your-auth-token-123344';
    const [messages, setMessages] = useState([]);
    const socket = useRef(null);
    const heartbeatIntervalRef = useRef(null);
    const serverTimeoutRef = useRef(null);

    useEffect(() => {
        // Initialize WebSocket connection with auth token
        socket.current = new WebSocket(`ws://localhost:8081/websocket-endpoint?token=${authToken}`);

        socket.current.onopen = () => {
            console.log('Connection established');
            startHeartbeat();
        };

        socket.current.onmessage = (event) => {
            console.log('Message from server:', event.data);
            if (event.data === 'ping') {
                //socket.current.send('pong');
            }else{
                const newMessage = event.data;
                alert(`You need to complete: ${newMessage}`);
            }
            resetServerTimeout();
        };

        socket.current.onerror = (error) => {
            console.error('WebSocket Error:', error);
        };

        socket.current.onclose = (event) => {
            console.log('Connection closed', event);
            stopHeartbeat();
        };

        return () => {
            if (socket.current) {
                socket.current.close();
            }
            stopHeartbeat();
        };
    }, []);

    const startHeartbeat = () => {
        heartbeatIntervalRef.current = setInterval(() => {
            if (socket.current.readyState === WebSocket.OPEN) {
                socket.current.send('ping');
            }
        }, 30000); // 30 seconds
        resetServerTimeout();
    };

    const stopHeartbeat = () => {
        if (heartbeatIntervalRef.current) {
            clearInterval(heartbeatIntervalRef.current);
            heartbeatIntervalRef.current = null;
        }
        if (serverTimeoutRef.current) {
            clearTimeout(serverTimeoutRef.current);
            serverTimeoutRef.current = null;
        }
    };

    const resetServerTimeout = () => {
        if (serverTimeoutRef.current) {
            clearTimeout(serverTimeoutRef.current);
        }
        serverTimeoutRef.current = setTimeout(() => {
            if (socket.current) {
                socket.current.close();
            }
        }, 60000); // 60 seconds
    };

    return (
        <div>
            <h1>WebSocket Heartbeat Example 1</h1>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
            <ul>
                {messages.map((message, index) => (
                     <li key={index}>{message}</li>
                 ))}
            </ul>
        </div>
    );
};

export default WebSocketComponent;