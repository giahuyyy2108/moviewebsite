import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCUJF62ebvuCjVPs-Hqm5zBxtLw5RZ04xo",
  authDomain: "netflix-f85de.firebaseapp.com",
  projectId: "netflix-f85de",
  storageBucket: "netflix-f85de.appspot.com",
  messagingSenderId: "641833518290",
  appId: "1:641833518290:web:446664923df9960efd990b",
};

const firebaseapp = firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
