import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GlobalContexts from './contexts/GlobalContexts'



ReactDOM.render(
  <React.StrictMode>
    <GlobalContexts>
      <App />
    </GlobalContexts>
  </React.StrictMode>,
  document.getElementById('root')
);

