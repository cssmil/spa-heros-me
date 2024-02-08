import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles.css"
import { AppHeros } from './AppHeros'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppHeros />
  </BrowserRouter>
)
