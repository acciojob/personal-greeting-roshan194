import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <h1>Personalized Greeting</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <h2>Hello, {name}n!</h2>
    </div>
  );
};

export default App;