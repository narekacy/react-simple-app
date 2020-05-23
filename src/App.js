import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
}

const Technologies = () => {
  return (
    <div className="App">
      <ul>
        <li>Text 1</li>
        <li>Text 2</li>
        <li>Text 3</li>
        <li>Text 4</li>
      </ul>
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <a href='#'>Home</a>
      <a href='#'>News</a>
      <a href='#'>Page</a>
    </div>
  );
}

export default App;
