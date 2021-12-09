// Import the functions you need from the SDKs you need
import * as firebase from "../../android/app/google-services.json"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr35dNybkM6Wcm4OnPEisW3fpsrBZKcBw",
  authDomain: "weddingapp-f5210.firebaseapp.com",
  projectId: "weddingapp-f5210",
  storageBucket: "weddingapp-f5210.appspot.com",
  messagingSenderId: "745312706169",
  appId: "1:745312706169:web:be1c0b5d709a33e16d3ea8"
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