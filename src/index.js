import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import './gsap-brand.css';
import './style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className='relative w-full h-[600px] bg-green-500 text-black'>scroll down</div>
    <App />
    <div className="relative w-full h-[400px] bg-gray-800" />
  </StrictMode>
);
