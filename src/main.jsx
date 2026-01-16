import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <div className="md:container m-2">
      <ToastContainer position="top-right" />
      <App />
  </div>,
)
