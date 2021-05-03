import firebase from 'firebase'

// replace this with your credentials
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAodOUER6pFE_FWdGvLFKrlYswx8PJbfxE",
  authDomain: "todoapp-2e724.firebaseapp.com",
  projectId: "todoapp-2e724",
  databaseURL:"https://todoapp-2e724-default-rtdb.firebaseio.com",
  storageBucket: "todoapp-2e724.appspot.com",
  messagingSenderId: "786749440936",
  appId: "1:786749440936:web:a1ec7269ba414b0303939d",
  measurementId: "G-EDNX83MH0W"
};

// ----------------------------------------//

const fire = firebase.initializeApp(firebaseConfig);
export default fire;