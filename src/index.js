import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB7HLl5lgWXk1XFfdaprzmSC54D2SO5czs",
  authDomain: "whereswaldo-6d58b.firebaseapp.com",
  projectId: "whereswaldo-6d58b",
  storageBucket: "whereswaldo-6d58b.appspot.com",
  messagingSenderId: "132896620378",
  appId: "1:132896620378:web:90b1831a52250e2df77d63"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
