import React, { useState, useEffect } from 'react';
import {ably, spaces} from '../../services/ablyService'
import PreferenceNav from './PreferenceNav/PreferenceNav';
import Split from "react-split";
import CodeMirror, { ViewUpdate } from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
type PlaygroundProps = {

};

const Playground:React.FC<PlaygroundProps> = () => {
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
    
      const handleChange = (value: string, viewUpdate: ViewUpdate) => {
        setText(value);
        channel.publish('text-change', value);
      };
      
   
   return <div className='flex flex-col bg-dark-layer-1 relative'>
  <PreferenceNav/> 
<Split direction="vertical" sizes={[60, 40]} minSize={60} className="h-[calc(100vh-94px)]">
  <div className="w-full overflow-auto"> 
  <div className="w-full overflow-auto">
            <CodeMirror
                value={text}
                theme={vscodeDark}
                extensions={[javascript()]}
                onChange={handleChange}
                />
        </div>
  </div>
  <div className="w-full px-5 overflow-auto"> 
  fdoij
  </div>
</Split>

    </div>
    
};
export default Playground;