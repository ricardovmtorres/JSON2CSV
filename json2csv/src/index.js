import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// EXEMPLO: 
/*input.json*/
// [
//   {
//     "name": "James Holden",
//     "email": "james@rocinante.com",
//     "dob": "2370-07-23"
//   },
//   {
//     "name": "Amos Burton",
//     "email": "amos@rocinante.com",
//     "dob": "2368-12-12"
//   },
//   {
//     "name": "Naomi Nagata",
//     "email": "naomi@rocinante.com",
//     "dob": "2372-03-11"
//   },
//   {
//     "name": "Alex,Camal",
//     "email": "alex@rocinante.com",
//     "dob": "2366-03-12"
//   }
// ]

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
