import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Toaster } from 'react-hot-toast'

import App from './App'
import Landing from './components/Landing'

import './i18n'

ReactDOM.render(
  <React.StrictMode>
    <Toaster />
    <Landing />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
