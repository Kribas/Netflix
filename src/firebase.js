import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCq5jMqrq2WZHnyfN9emJzThhOlo4N76rY",

  authDomain: "netflix-clone-cd816.firebaseapp.com",

  projectId: "netflix-clone-cd816",

  storageBucket: "netflix-clone-cd816.appspot.com",

  messagingSenderId: "337384680800",

  appId: "1:337384680800:web:e2f148a42a18f99b7a4205",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
