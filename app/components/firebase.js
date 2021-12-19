// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2UkM92MM5KieQpEcPS1r7BNPCG-f7rK4",
  authDomain: "mobileapp-a3675.firebaseapp.com",
  projectId: "mobileapp-a3675",
  storageBucket: "mobileapp-a3675.appspot.com",
  messagingSenderId: "140328224289",
  appId: "1:140328224289:web:d0ca8801aa2560b185c560"
};


// Initialize Firebase
let app;
if(firebase.app.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app()
}
const auth = firebase.auth()
export{auth};