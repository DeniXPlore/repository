import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { menus } from './data'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App menus={menus}/>
  </StrictMode>,
)
