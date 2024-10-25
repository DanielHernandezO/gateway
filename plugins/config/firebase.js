import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import admin from "firebase-admin"
var serviceAccount = require("./serviceAccountKey");

const firebaseConfig = {
    apiKey: "AIzaSyCERwJd1jHauTRVfDfcLDvnr2NnIqIEDxo",
    authDomain: "arquitecturas-avanzadas-21cfb.firebaseapp.com",
    projectId: "arquitecturas-avanzadas-21cfb",
    storageBucket: "arquitecturas-avanzadas-21cfb.appspot.com",
    messagingSenderId: "730532142164",
    appId: "1:730532142164:web:c6193c7fb949f50c7e61c1",
    measurementId: "G-DS1X83YT34"
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const admi = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})