import React from 'react'
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ContextFun from './context/ContextProvider';

function App() {
  return (
    <ContextFun >
      <Navbar />
      <Home />
    </ContextFun>
  );
}

export default App;
