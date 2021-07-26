import firebase from 'firebase';
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAEDZtKC0EaWrL8JLJf8kww_obi-I5bWMA",
    authDomain: "fetch-coin.firebaseapp.com",
    projectId: "fetch-coin",
    storageBucket: "fetch-coin.appspot.com",
    messagingSenderId: "677339695221",
    appId: "1:677339695221:web:72d77954a16f568e2f103c",
    measurementId: "G-78N51K9S2P"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;

