import React from 'react';
import ReactDOM from 'react-dom';
import bootstrap from '../src/bootstrap-4.5.2-dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import '../src/icofont/icofont.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
