import './App.css';
import Banner from './Banner.js';
import Exhibit from './Exhibit.js';
import BinarySelector from './BinarySelector.js';
import WebSocketComponent from './WebSocketComponent.js';
import { useState } from 'react';

function App() {
  const [IPType, setIpType] = useState(null);
  const [IPAddress, setIPAddress] = useState(null);

  function getIPv4Address() {
    setIpType("IPv4 Address")
    fetch('https://api.ipify.org?format=text')
    .then(response => response.text())  // Parse the response as text
    .then(data => {
      console.log('Your IPv6 address is:', data);  // Log the IP address to the console
      setIPAddress(data);
    })
    .catch(error => {
      console.error('Error fetching the IP address:', error);
      setIPAddress("Error Retrieving IPv4 Address");
    });
  }

  function getIPv6Address() {
    setIpType("IPv6 Address")
    fetch('https://api6.ipify.org?format=text')
    .then(response => response.text())  // Parse the response as text
    .then(data => {
      console.log('Your IPv6 address is:', data);  // Log the IP address to the console
      setIPAddress(data);
    })
    .catch(error => {
      console.error('Error fetching the IP address:', error);
      setIPAddress("Error fetching IPv6 Address");
    });
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Exhibit heading="Exhibit Heading" content="This is the content"></Exhibit>
      <BinarySelector 
        title1="Search IPv4 Address" function1={getIPv4Address}
        title2="Search IPv6 Address" function2={getIPv6Address}>
      </BinarySelector>
      {/* Conditionally render Exhibit only after an IP type has been selected */}
      {IPType && IPAddress && (
        <Exhibit heading={IPType} content={IPAddress} />
      )}
      <WebSocketComponent></WebSocketComponent>
    </div>
  );
}

export default App;
