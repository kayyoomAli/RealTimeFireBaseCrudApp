import React, {FC} from 'react';
import Route from './src/routes/route';
import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyC1h_0jVv8wiCG6Uo5MAsn5rOQgVqC3cEo',
  authDomain: 'realtimecrudfirebase.firebaseapp.com',
  databaseURL: 'https://realtimecrudfirebase-default-rtdb.firebaseio.com',
  projectId: 'realtimecrudfirebase',
  storageBucket: 'realtimecrudfirebase.appspot.com',
  messagingSenderId: '345976090560',
  appId: '1:345976090560:web:4ea9566a38bbf13d66a225',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
else {
    firebase.app(); // if already initialized, use that one
 }

export {firebase, Auth};

const App = () => {
  return <Route />;
};

export default App;
