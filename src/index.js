import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import the reducer
import reducer from "./reducer/reducer";

// import createStore
// createStore used to create the store object
// import applyMiddleware
// applyMiddleware() function used to apply the "sagamiddleware to store object"
import {createStore,applyMiddleware} from "redux";

// import provider
// provider makes to store avalibility to component
import {Provider} from "react-redux";

// import saga
import createSagaMidlleware from "redux-saga";
import {main_fun} from "./action/action";

const sagaMiddleware = createSagaMidlleware();
const store = createStore(reducer,applyMiddleware(sagaMiddleware));

//activate the generate function
sagaMiddleware.run(main_fun)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
