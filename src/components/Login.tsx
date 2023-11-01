import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { createContext } from 'react';

const Login: React.FC = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username.toLowerCase() === 'mark' && password === 'password') {
      // Successfully logged in as Mark
      navigate('/home');
    } else if (username.toLowerCase() === 'john' && password === 'password') {
        navigate('/twoSum/john');
        
    } else {
      // Authentication failed
      setError('Invalid username or password');
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center relative">
    <div className="absolute top-0 left-0 w-full h-full animate-gradient"></div>
    <div className="bg-white p-8 rounded-lg shadow-md w-96 relative z-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-300">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-300">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>
      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
      >
        Login
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
  
      {/* Create an Account and Forgot Password links */}
      <div className="mt-4 flex justify-between">
        <a href="#" className="text-blue-500 hover:underline">Create an Account</a>
        <a href="#" className="text-blue-500 hover:underline">Forgot Password</a>
      </div>
    </div>
  </div>

    // <div >
    //   <h2>Login</h2>
    //   <div>
    //     <label htmlFor="username">Username:</label>
    //     <input
    //       type="text"
    //       id="username"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="password">Password:</label>
    //     <input
    //       type="password"
    //       id="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //   </div>
    //   <button onClick={handleLogin}>Login</button>
    //   {error && <p style={{ color: 'red' }}>{error}</p>}
    // </div>
  );
};

export default Login;
