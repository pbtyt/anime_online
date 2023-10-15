import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/global.css'

import { store } from './store/store'
import { Provider } from 'react-redux'

import Router from './components/Router'

document.cookie = "SameSite=None;"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
)
