import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {Button, NextUIProvider} from '@nextui-org/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <Button color='primary'/>
    <App />
    </NextUIProvider>
  </StrictMode>,
)
