import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Toaster } from 'react-hot-toast'

import './i18n'

ReactDOM.render(
  <React.StrictMode>
    <Toaster />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
