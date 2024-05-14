import React from 'react'
import { createRoot } from 'react-dom/client'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import 'core-js'

import App from './App'
import { store, persistor } from './app/store'
import { BrowserRouter } from 'react-router-dom'

// Get the root element from the DOM
const container = document.getElementById('root')

// Create a root
const root = createRoot(container)

// Use the render method on the root to render your app components
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
