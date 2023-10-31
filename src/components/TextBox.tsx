import React, { useState, useEffect } from 'react';
import {ably, spaces} from '../services/ablyService';
import { SpaceProvider, SpacesProvider } from "@ably/spaces/react"
import LiveCursors from './LiveCursors';

const TextBox = () => {
  const [text, setText] = useState('');

  const channel = ably.channels.get('textbox-channel');

  useEffect(() => {
    channel.presence.enter();
    channel.presence.subscribe((presenceMessage: { action: any; clientId: any; }) => {
      const { action, clientId } = presenceMessage;
      console.log("Presence update:", action, "from:", clientId);
    
      channel.presence.get((err: any, members: any[]) => {
        if (err) {
          return console.error(`Error retrieving presence data: ${err}`);
        }
        document.getElementById("presence-set")!.innerHTML = members
          .map((member: { clientId: any; }) => {
            return `<li>${member.clientId}</li>`;
          })
          .join("");
      });
    });


  }, []); 
  useEffect(() => {
    channel.subscribe('text-change', (message: { data: React.SetStateAction<string>; }) => {
      setText(message.data);
    });
  }, []);

  const handleChange = (event: { target: { value: any; }; }) => {
    const newText = event.target.value;
    setText(newText);
    channel.publish('text-change', newText);
  };

  return (
    <div>
         
      <textarea  
      
      style={{
        width: "400px", // Set the desired width
        height: "200px", // Set the desired height
        backgroundColor: "black", // Background color
        color: "white", // Text color
        border: "1px solid black", // Border color (match background color to hide it)
        borderRadius: "10px", // Rounded corners
        left: "50%", // Center horizontally
        top: "50%",
        caretColor: "white" // Center vertically
      }}
      
      value={text} onChange={handleChange} />
      <div id="presence-set"> </div>
    </div>
  ); 
};

export default TextBox;
