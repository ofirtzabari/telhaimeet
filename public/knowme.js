import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js'
import { getFirestore, doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js'
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyBpnxrWY7cxJ3jAPceUju5C5lcxiDpot6I",
    authDomain: "meetelhai.firebaseapp.com",
    databaseURL: "https://meetelhai-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "meetelhai",
    storageBucket: "meetelhai.appspot.com",
    messagingSenderId: "690174653337",
    appId: "1:690174653337:web:7fad7656f5466c1e235908"
};

$(document).ready(()=>{
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const db = getFirestore(app);

    $("#submit").click(()=>{
    onAuthStateChanged(auth, async(user) => {
        if (user) {
        var name = $("#firstName").val();
        var birthDate = $("#birthDate").val();
        var gender_ = $("#gender").val();
        var searchGender = $("#searchGender").val();
        if(name == "" || birthDate == "" || gender_ == "" || searchGender == ""){
            alert("please fill all");
            return;
        }
        console.log(user.email);
        const myData = doc(db, 'Who-I-Am', user.email);
        await setDoc(myData, {first_name: name, birth : birthDate, gender : gender_, search : searchGender});
        window.location.href="./main.html";
        } 
        else {
        alert("you are log out, please log in");
        window.location.href="./login.html";
        }
    });
    });
});