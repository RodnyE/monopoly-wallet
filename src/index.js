// browser console in development mode 
const eruda = await import('eruda');
eruda.default.init()

import React from 'react'
import { createRoot } from 'react-dom/client';

import './styles/theme.css'  
import './styles/main.css' 
import './styles/utils.css'  

import App from './App.jsx'

// render
const root = createRoot(document.getElementById('root'));
root.render(<App/>);