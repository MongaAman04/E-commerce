
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5i8p6D7RaD_Nh58asvIRF0BN_R21HDDI",
    authDomain: "e-commerce-1b971.firebaseapp.com",
    projectId: "e-commerce-1b971",
    storageBucket: "e-commerce-1b971.firebasestorage.app",
    messagingSenderId: "614888943452",
    appId: "1:614888943452:web:3c4b7f1094e0370a7edb99",
    measurementId: "G-MQ74QN36ZN"
};

// Initialize Firebase
let isLoggedIn = false;
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const signup = document.querySelector("#signup")

signup.addEventListener("click", function () {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#mail").value;
    const repassword = document.querySelector("#repass").value;
    const password = document.querySelector("#pass").value;
    const warninng = document.querySelectorAll(".container span")
    if (password == repassword) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password,name)
            .then((userCredential) => {
                const user = userCredential.user;          
                window.location.href = "index.html"
                isLoggedIn  = true;
                user.auth.displayName = name;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
               console.warn(errorMessage);
               

            });
    } else {
        warninng.forEach(e => {
            e.style.display = "block";
        })
    }

})


const change = document.querySelector(".change");
change.addEventListener("click", () => {
    const firstHalf = document.querySelector(".first-half");
    const secondHalf = document.querySelector(".second-half");
    firstHalf.style.transform = " translateX(100%)";
    firstHalf.style.transition = "1s";
    secondHalf.style.transform = "translateX(-100%)";
    secondHalf.style.transition = "1s";
    secondHalf.querySelector("h1").innerText = "Welcome back!"
    secondHalf.querySelector("p").innerText = "login to continue shopping..."
    firstHalf.innerHTML = `<div class="container">
            <h1>LogIn</h1>
            <label for="email">Email Adddress</label>
            <input type="email" name="email" id="mail">
            <label for="password">Password</label>
            <input type="password" name="password" id="pass">
            <span><p>*Password does not match</p></span>
            <p class="forgot" id="forgot">Forget password?</p>
           <button id="login">LogIn</button>
           <p class="change">New User? SignUp</p>
                                                                                      
        </div>`


    const login = document.querySelector("#login");
    login.addEventListener("click", () => {
        const email = document.querySelector("#mail").value;
        const password = document.querySelector("#pass").value;
        const auth = getAuth();
        const sing_in_up = document.querySelector(".sing_in_up");
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                window.location.href = "index.html"
                isLoggedIn = true;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)

            });
    })

    const forgot = document.querySelector("#forgot");
    forgot.addEventListener("click", ()=>{
        const email =  document.querySelector("#mail").value;
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert(`Password Reset link is sent to your ${email}`)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    })
})

