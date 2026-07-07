import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { initSeedData } from './lib/storage'
import { SEED_PAGES } from './lib/seedData'

// Run synchronously BEFORE React renders so all seed/migration data
// is ready for the very first render.
initSeedData(SEED_PAGES);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
