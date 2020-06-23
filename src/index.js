import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBd_dkFDvTXSHKOpDGia5sXkqZQDFMLKag',
  authDomain: 'weatherapp-b.firebaseapp.com',
  databaseURL: 'https://weatherapp-b.firebaseio.com',
  projectId: 'weatherapp-b',
  storageBucket: 'weatherapp-b.appspot.com',
  messagingSenderId: '766045708402',
  appId: '1:766045708402:web:060a33b6bce2c8e45862eb',
  measurementId: 'G-7LJTNPRFD7'
};

firebase.initializeApp(config);

//oath flow

ReactDOM.render(<App />, document.querySelector('#root'));
