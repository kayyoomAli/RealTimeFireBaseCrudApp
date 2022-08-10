
import { initializeApp } from "firebase/app";
import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyC1h_0jVv8wiCG6Uo5MAsn5rOQgVqC3cEo",
  authDomain: "realtimecrudfirebase.firebaseapp.com",
  databaseURL: "https://realtimecrudfirebase-default-rtdb.firebaseio.com",
  projectId: "realtimecrudfirebase",
  storageBucket: "realtimecrudfirebase.appspot.com",
  messagingSenderId: "345976090560",
  appId: "1:345976090560:web:4ea9566a38bbf13d66a225"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default {firebase,Auth,database};