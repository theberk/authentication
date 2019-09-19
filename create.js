const userBttn = document.getElementById("userBttn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("login-message");

userBttn.onclick = function(event) {
	const promise = firebase.auth().createUserWithEmailAndPassword(emailInput.value, passwordInput.value);
	promise.catch(function(error) {
		message.textContent = error.message;
	});
};
