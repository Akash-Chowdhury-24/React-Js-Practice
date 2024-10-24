import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalState } from './compnents/practice-9/global.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './compnents/practice-14/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    
    // <BrowserRouter>
    //   <GlobalState>
    //     <App />
    //   </GlobalState>
    // </BrowserRouter> 

    <Provider store={store}>
      <App />
    </Provider>
)
