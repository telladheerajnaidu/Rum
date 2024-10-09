// Hardcoded correct username and password
const correctUsername = "123";
const correctPassword = "123";

// Function to validate the form on submit
function validateForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if both fields are filled
  if (username === "" || password === "") {
    alert("Please fill out both fields");
    return false;
  }

  // Check if username and password are correct
  if (username === correctUsername && password === correctPassword) {
    alert("Login Successful!");
    return true; // Here, you could redirect to another page if needed
  } else {
    alert("Invalid username or password");
    return false;
  }
}
