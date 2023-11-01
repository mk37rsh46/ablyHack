import React, { useEffect, useState } from 'react';
import Split from 'react-split'
import ProblemDescription from './ProblemDescription';
import { useParams } from 'react-router-dom';
import { Realtime } from 'ably';

const WeinDis: React.FC = () => {
    const {name} = useParams();
    const ably = new Realtime.Promise({ key: 'ewHhiQ.nDNboA:gWz9rR-5oZLD3WZGuYP04p-YVX3Pdvi2ylil2c6A_5Y', clientId: name});
    const channel = ably.channels.get('fasiojp');
    const [message, setMessage] = useState('');
    const [chatLog, setChatLog] = useState<{ clientId: string; message: string }[]>([]);
  
    const clientId = ably.auth.clientId!.charAt(0).toUpperCase() + ably.auth.clientId!.slice(1);

    useEffect(() => {
      const messageHandler = (msg: any) => {
        setChatLog((prevChatLog) => [...prevChatLog, msg.data]);
      };
  
      channel.subscribe('message', messageHandler);
  
      return () => {
        channel.unsubscribe('message', messageHandler);
      };
    }, []);
  
    const sendMessage = () => {
      if (message) {
        channel.publish('message', { clientId, message }); // Include client ID in the message
        setMessage('');
      }
    };

  return (
<Split direction="vertical" sizes={[60, 40]} minSize={60} >
    <ProblemDescription></ProblemDescription>
    <div className='bg-dark-layer-1 text-white'>
        <h1 className='text-lg text-center'>Chat Room</h1>
        <div className='p-5'> 
        <div className="h-[300px] flex flex-col justify-between p-10  border border-white rounded-md">
  <ul className="flex-grow overflow-y-auto" style={{ minHeight: '200px' }}>
          {chatLog.map((msg, index) => (
            <li key={index}>
              <strong>{msg.clientId}: </strong>
              {msg.message}
            </li>
          ))}
        </ul>
      </div>
      </div>
      <div className="sticky top-[10vh] p-2">
      <input
  type="text"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
/>
<button onClick={sendMessage} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none justify-center">
  Send
</button>
      </div>
    </div>
</Split>
  );
};

export default WeinDis;
