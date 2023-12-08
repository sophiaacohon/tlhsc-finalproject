import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/login',
        { username, password },
      );

      const userType = response.data.userType;

      switch (userType) {
        case 'staff':
          navigate('../staff/Dashboard');
          break;
        case 'admin':
          navigate('./Dashboard');
          break;
        case 'manager':
          navigate('../manager/mDashboard');
          break;
        default:
          navigate('/dashboard');
          break;
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('Wrong username or password. Please try again.');
      } else {
        console.error('Login failed:', error.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Username:
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password:
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;