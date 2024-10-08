import React from 'react';
import ReactDOM from 'react-dom/client';
// redux
import { Provider } from 'react-redux'
import store from './redux/store';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </React.StrictMode>
);