import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import firestore từ firebase/firestore
import { getStorage } from "firebase/storage";


// Firebase config
const firebaseConfig = {
    apiKey: 'AIzaSyDF-_GnYs8IBi1lkLdcSuH4Qdrdz4CVnNw',
    authDomain: 'red89-f8933.firebaseapp.com',
    projectId: 'red89-f8933',
    storageBucket: 'red89-f8933.appspot.com',
    messagingSenderId: '148816240907',
    appId: '1:148816240907:web:9aba16f39bce554467820e',
    measurementId: 'G-L2NV721VLZ'
};


initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore(); // Sử dụng getFirestore() để khởi tạo firestore
export const storage = getStorage();
