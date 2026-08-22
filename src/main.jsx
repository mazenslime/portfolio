import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { preconnect } from 'react-dom';
const Component=async()=>{
  preconnect('./assets/لقطة الشاشة 2026-02-26 171531.webp',{ as: 'image', type: 'image/webp'});
  preconnect('./assets/لقطة الشاشة 2026-02-27 000723.webp',{ as: 'image', type: 'image/webp'});
  preconnect('./assets/لقطة الشاشة 2026-02-27 001650.webp',{ as: 'image', type: 'image/webp'});
  preconnect('./assets/photo.webp',{ as: 'image', type: 'image/webp'})
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
