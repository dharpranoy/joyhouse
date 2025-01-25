import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBlr0cTTIOUab39r9N2UiUhyL9JYWsbZJc",
  authDomain: "joy-junction-a461a.firebaseapp.com",
  projectId: "joy-junction-a461a",
  storageBucket: "joy-junction-a461a.appspot.com",
  messagingSenderId: "169025307691",
  appId: "1:169025307691:web:ed02da172b8f1cd588566e",
  measurementId: "G-Z9GNFJVS2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage };
