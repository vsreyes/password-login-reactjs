import React, { useState } from 'react';

import './App.css';

const App = () => {
  const [username, setUsername] = useState('');

  return (
    <div>
      <input
        type='text'
        placeholder='Enter username'
        value={username}
        onChange={e => {
          setUsername(e.target.value);
        }}
      />
    </div>
  );
};

export default App;
