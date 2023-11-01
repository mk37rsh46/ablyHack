import { useState } from "react";
import { AiOutlineCopy, AiOutlineLink } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';



export default function Do(){  
      const navigate = useNavigate()

    const urlToCopy = 'https://shorturl.at/lptxU';
const [isCopied, setIsCopied] = useState(false);
const handleTClick = () => {
    navigate('/twoSum/mark');
}
const handleCopyClick = () => {
    // Create a temporary input element to hold the URL
    const tempInput = document.createElement('input');
    tempInput.value = urlToCopy;

    // Append the input element to the document (it doesn't need to be visible)
    document.body.appendChild(tempInput);

    // Select the URL text
    tempInput.select();

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Provide some visual feedback to the user (e.g., set isCopied state and reset after a short delay)
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
    return (
<div className="min-h-screen flex justify-center relative">
  <main className="bg-dark-layer-2 min-h-screen w-full">

        <h1
  className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium  mt-10 mb-5'>
        Your Problems
  </h1>
  <button
  className="block mx-auto text-base text-center text-white font-medium mt-5 mb-3 bg-green-800 hover:bg-green-700 font-semibold px-2 py-1 rounded-full transition duration-300 ease-in-out hover:scale-105"
>
  Create a new problem
</button>


  <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
  <table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
    <thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b '>
      <tr>
        <th scope='col' className='px-6 py-3 w-0 font-medium'>
          Title
        </th>

        <th scope='col' className='px-6 py-3 w-0 font-medium'>
          Category
        </th>
        <th scope='col' className='px-6 py-3 w-0 font-medium'>
          Share URL
        </th>
        <th scope='col' className='px-6 py-3 w-0 font-medium'>
          Visit
        </th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <th scope='col' className='px-6 py-3 w-0 font-medium'>
          Two-Sum
        </th>

        <th scope='col' className='px-6 py-3 w-0 font-medium'>
          Array
        </th>
        <th scope='col' className='px-6 py-3 w-0 font-medium'>
        <button onClick={handleCopyClick}>
        {!isCopied ? <AiOutlineCopy /> : null}
      </button>
      {isCopied && <span>Copied!</span>}
        </th>
        <th className="text-center">
  <button onClick={handleTClick} className="flex items-center justify-center">
   <AiOutlineLink />
  </button>
</th>
      </tr>
      </tbody>
  </table>
  </div>
        </main>
        
        
        </div>
    )



}