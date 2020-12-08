import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import JobContextProvider from './Context/JobContextProvider'

ReactDOM.render(
  <JobContextProvider>
    <App />
  </JobContextProvider>,
  document.getElementById('root')
);

