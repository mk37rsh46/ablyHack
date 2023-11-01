import React, { useState, useEffect } from 'react';
import {ably1, spaces} from '../../services/ablyService'
import PreferenceNav from './PreferenceNav/PreferenceNav';
import Split from "react-split";
import CodeMirror, { ViewUpdate } from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import { BsChevronUp } from 'react-icons/bs';
import axios from 'axios';
import { AiOutlineSetting, AiOutlineFullscreen } from 'react-icons/ai';
import { FiUsers } from "react-icons/fi";
import EmojiReactions from '../../components/EmojiReactions';
import { SpacesProvider } from '@ably/spaces/dist/mjs/react';
import { useContext } from 'react';
import {useParams} from 'react-router-dom';
import { Realtime } from 'ably';
import Spaces from '@ably/spaces';



type PlaygroundProps = {

};

const Playground:React.FC<PlaygroundProps> = () => {
  let {name } = useParams();
  name = name!.charAt(0).toUpperCase() + name!.slice(1);

  const boilerPlate = `function twoSums(nums, target){
    //Write your own code here
  }`;  const ably = new Realtime.Promise({ key: '3dOKCA.FRENYQ:K1rXvegOdg2Pt4wJF33w29I-gJKvH35QSvS0DbAjLoY', clientId: name});
  const generateTokenForUser = (userId: any) => {
      return ably.auth.createTokenRequest({ clientId: userId });
    };
  const spaces = new Spaces(ably);
  const [result, setResult] = useState("No Code has been run yet");
  const [text, setText] = useState(boilerPlate);
    const channel = ably.channels.get('textbox-channel');
    const runUserFunction = () => {
      try {
        
        const resultValue =  eval(text);
        handleChange1(`${resultValue}`);
      } catch (error) {
        setResult('Error: ' + (error as Error).message);
      }
    };
    useEffect(() => {
        channel.presence.enter();
        channel.presence.subscribe((presenceMessage: { action: any; clientId: any; }) => {
          const { action, clientId } = presenceMessage;
          
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

      useEffect(() => {
        channel.subscribe('text-change1', (message: { data: React.SetStateAction<string>; }) => {
          setResult(message.data);
        });
      }, []);
     const handleChange1 = (value: string) => {
        setResult(value);
        channel.publish('text-change1', value);
      };
      const handleChange = (value: string, viewUpdate: ViewUpdate) => {
        setText(value);
        channel.publish('text-change', value);
      };
      
   
   return <div className='flex flex-col bg-dark-layer-1 relative  overflow: hidden; '>
		<div className='flex items-center justify-between bg-dark-layer-2 h-11 w-full'>
			<div className='flex items-center text-white'>
				<button className='flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2  px-2 py-1.5 font-medium'>
					<div className='flex items-center px-1'>
						<div className='text-xs text-label-2 dark:text-dark-label-2'>JavaScript</div>
					</div>
				</button>
			</div>

			<div className='flex items-center m-2'>
      <button className='preferenceBtn group'>
					<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
						<FiUsers />
					</div>
					<div className='preferenceBtn-tooltip' id="presence-set">Full Screen</div>
				</button>

				<button className='preferenceBtn group'>
					<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
						<AiOutlineSetting />
					</div>
					<div className='preferenceBtn-tooltip'>Settings</div>
				</button> 
			</div>
		</div>
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
  <div className="text-white flex h-10 items-center space-x-6">
  <div className="container flex items-center">
  <div className="text">Output</div>
  <hr className="divider" />
  <SpacesProvider client={spaces}>
  <EmojiReactions />
  </SpacesProvider>
</div>

  
</div>

<div className="font-semibold my-4 ">
<div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fil-3 border-transparent text-white mt-2">
      {result}

</div>

<br>
</br>
<br>
</br>

</div>
  </div>
</Split>
<div className='flex bg-dark-layer-1 absolute bottom-0 z-10 w-full'>
<div className='mx-5 my-[10px] flex justify-between w-full'>
    <div className='mr-2 flex flex-1 flex-nowrap items-center space-x-4'>
        <button className='px-3 py-1.5 font-medium items-center transition-all inline-flex bg-dark-fill-3 text-sm hover:bg-dark-fill-2 text-dark-label-2 rounded-lg pl-3 pr-2'>
            Console
            <div className='ml-1 transform transition flex items-center'>
                <BsChevronUp className='fill-gray-6 mx-1 fill-dark-gray-6' />
            </div>
        </button>
    </div>
    <div className='ml-auto flex items-center space-x-4'>
        <button onClick={runUserFunction} className='px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm text-white bg-dark-green-s hover:bg-green-3 rounded-lg'>
            Run
        </button>
    </div>
</div>
</div>

    </div>
    
};
export default Playground;