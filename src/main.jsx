import { createRoot } from 'react-dom/client'
import App from './App.jsx'

console.log(App());
createRoot(document.getElementById('root')).render(
    <App />
)
