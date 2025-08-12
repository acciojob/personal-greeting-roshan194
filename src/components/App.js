import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Personalized Greeting</h1>
      <input 
        type="text" 
        placeholder="Enter your name" 
        defaultValue="" 
        value={name} 
        onChange={handleInputChange} 
      />
      <h2>
        {name ? `Hello, ${name}!` : ''}
      </h2>
    </div>
  );
};

export default App;