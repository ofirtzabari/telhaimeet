import { initializeApp, getApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js'
import { getAuth, signInWithEmailAndPassword  } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js'

const firebaseConfig = {
apiKey: "AIzaSyBpnxrWY7cxJ3jAPceUju5C5lcxiDpot6I",
authDomain: "meetelhai.firebaseapp.com",
databaseURL: "https://meetelhai-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "meetelhai",
storageBucket: "meetelhai.appspot.com",
messagingSenderId: "690174653337",
appId: "1:690174653337:web:7fad7656f5466c1e235908"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();


$(document).ready(()=>{

$("#login").click(function(){

    var email = $("#email").val();
    var password = $("#password").val();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if (user) {
        var userData = {
        uid: user.uid
        }}
    // ...
    window.location.href="./main.html";
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    $("#error-message").html(errorCode);
    // ..
    });
    });

});