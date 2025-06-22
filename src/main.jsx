import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Router, RouterProvider } from 'react-router-dom';
import router from './Router.jsx';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router} />

    </Provider>

  </StrictMode>,
)
