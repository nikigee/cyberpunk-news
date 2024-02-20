import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter} from 'react-router-dom';

import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

//const router = createBrowserRouter([]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
