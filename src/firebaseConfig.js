// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCFKiGDfjddZ4yhDRqwnRcJhm3Zh-vicfs',
  authDomain: 'test-31fdf.firebaseapp.com',
  projectId: 'test-31fdf',
  storageBucket: 'test-31fdf.appspot.com',
  messagingSenderId: '778228938360',
  appId: '1:778228938360:web:f503ad61a2113f5ce65f8d',
  measurementId: 'G-M31Q60Z0DE',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const signInGoogle= () => {
  return signInWithPopup(auth, new GoogleAuthProvider());
}