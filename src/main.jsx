import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { StrictMode } from 'react';
console.log(App());
createRoot(document.getElementById('root')).render(

    <StrictMode><App /></StrictMode>
    
)
