import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const auth = getAuth();
const provider = new GoogleAuthProvider();

document.getElementById("google-login").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // Signed in successfully
      const user = result.user;
      console.log("Logged in as:", user.email);
      window.location.href = "gamepage.html";
    })
    .catch((error) => {
      console.error("Login error:", error);
      alert("Google login failed: " + error.message);
    });
});
document.getElementById("gamepage").addEventListener("click", () => {
  window.location.href = "gamepage.html";
});
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    const confirmExit = confirm("Press OK to exit the game.");
    if (confirmExit) {
      window.location.href = "gamepage.html"; 
    }
  }
});
document.getElementById('exit-btn').addEventListener('click', function () {
  const confirmExit = confirm("Press OK to exit the game.");
  if (confirmExit) {
    window.location.href = "gamepage.html";
  }
});