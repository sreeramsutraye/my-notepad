import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';
import './styles/index.css';

// 1. Get the root container element from the DOM
const container = document.getElementById('root');

// 2. Create a root for the concurrent renderer
const root = createRoot(container);

// 3. Render your App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);