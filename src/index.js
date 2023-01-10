import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCOpoXShEUMrW_NEYhuG8oVmuRyqhtk8H4",
  authDomain: "cart-522ed.firebaseapp.com",
  projectId: "cart-522ed",
  storageBucket: "cart-522ed.appspot.com",
  messagingSenderId: "956471120032",
  appId: "1:956471120032:web:f0c09e8edda1c8bb4279c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

