import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot is correct for React 18

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);