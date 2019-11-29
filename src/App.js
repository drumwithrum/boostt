import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Views from './views'
import './App.css';

const App = () => (
  <BrowserRouter>
    <Views />
  </BrowserRouter>
);

export default App;
