import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import NavigationBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <p>Sample content</p>
    </div>
  );
}

export default App;
