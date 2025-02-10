import React, { useState, useEffect } from 'react';

const WebSocketComponent = () => {
  // State to store the latency value
  const [latency, setLatency] = useState(null);

  // Create the WebSocket connection when the component mounts
  useEffect(() => {
    // eslint-disable-next-line
    const socket = new WebSocket('ws://localhost:55455');

    // When the WebSocket is open
    socket.onopen = () => {
      console.log("WebSocket is Connected");
    };

    // When the WebSocket receives a message
    socket.onmessage = (event) => {
      const packetLatency = event.data;  // Assuming the latency is received in milliseconds
      const current = Date.now();
      setLatency(current - packetLatency);  // Calculate and update latency
    };

    // If the WebSocket connection is closed
    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // If there is an error with the WebSocket connection
    socket.onerror = (error) => {
      console.error('WebSocket Error:', error);
    };

    // Cleanup WebSocket connection when the component is unmounted
    return () => {
      socket.close();
    };
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div className="mt-2 by-2">
      <h2>Latency</h2>
      <div>
        {latency !== null ? (
          <p>Current latency: {latency} ms</p>
        ) : (
          <p>Waiting for latency data...</p>
        )}
      </div>
    </div>
  );
};

export default WebSocketComponent;