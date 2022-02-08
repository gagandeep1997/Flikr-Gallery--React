import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import './css/main.min.css';
import { ContextApiStoreProvider } from './store/ContextApiStore';

ReactDOM.render(
  <ContextApiStoreProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextApiStoreProvider>,
  document.getElementById('root')
);
