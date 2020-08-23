import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Clock from "./StateAndLifeCycle/Clock"
// import Toggle from './HandlingEvents/Toggle';
// import LoginControl from './ConditionalRendering/LoginControl';
// import NumberList from "./ListsAndKeys/NumberList"
// import Blog from "./ListsAndKeys/Blog"
// import NameForm from "./Forms/NameForm";
// import EssayForm from "./Forms/EssayForm";
// import FlavorForm from "./Forms/FlavorForm";
// import Reservation from "./Forms/Reservation";
// import Calculator from "./LiftingStateUp/Calculator";
// import SignUpDialog from "./Composition/SignUpDialog";
// import FilterableProductTable from "./ThinkingInReact/FilterableProductTable";
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
