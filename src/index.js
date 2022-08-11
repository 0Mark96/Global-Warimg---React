import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//Redux
import { Provider } from 'react-redux'
import store from './redux/store'
// Global style
import './global.scss';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

