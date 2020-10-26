import React, { useState } from 'react';

import './App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  return (
    <div className='container'>
      <input
        type='text'
        placeholder='Enter username'
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type='password'
        placeholder='Enter password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <h2>{username}</h2>
      {/* if the showPassword is true then we display SHOW else we display NOT
      SHOW */}
      <h2>{showPassword ? password : '*'.repeat(password.length)}</h2>
      <button onClick={e => setShowPassword(!showPassword)}>
        Show/Hide password
      </button>
    </div>
  );
};

export default App;
