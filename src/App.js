import React, { useState } from 'react';

import './App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
      <h2>{password}</h2>
      <button>Show/Hide password</button>
    </div>
  );
};

export default App;
