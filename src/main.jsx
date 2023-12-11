import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'normalize.css'
import './assets/styles/fonts.css'
import './assets/styles/variables.css'
import 'react-photo-view/dist/react-photo-view.css'
import { PhotoProvider } from 'react-photo-view'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PhotoProvider>
      <App />
    </PhotoProvider>
  </React.StrictMode>,
)
