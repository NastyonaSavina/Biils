import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';

import { Provider } from 'react-redux';
import { App } from 'components/App';
import 'react-toastify/dist/ReactToastify.css';


import './index.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
        <BrowserRouter basename="Bills">
          <App />
          <ToastContainer />
        </BrowserRouter>

  </Provider>
);
