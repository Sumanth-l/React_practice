import { StrictMode, use } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userReducer from './features/user.tsx'
import themeReducer from './features/Theme.tsx'


const store=configureStore({
  reducer:{
    user:userReducer,
    theme:themeReducer, 
  }
})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
