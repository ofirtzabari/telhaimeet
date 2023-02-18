import { initializeApp, getApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'
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


$(document).ready(function(){

    $("#signup").click(function(){

    var email = $("#email").val();
    var password = $("#password").val();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert("successful");
        // Signed in 
        const user = userCredential.user;
        if (user) {
        var userData = {
            uid: user.uid,
            mum: 456
        }}
        sessionStorage.setItem('userData', JSON.stringify(userData));
        // ...
        window.location.href="./knowme.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        $("#error-message").html(errorCode);
        // ..
    });
    });

});