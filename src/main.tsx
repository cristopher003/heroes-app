import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { AppRouter } from './router/AppRouter'
import { HeroesApp } from './HeroesApp'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <HeroesApp/>
  </React.StrictMode>,
)
