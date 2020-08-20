import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Toggle from './Toggle';
// import LoginControl from './LoginControl';
// import Form from "./Form";
import Calculator from "./LiftingStateUp/Calculator";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
