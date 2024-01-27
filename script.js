function login() {
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;

  // Retrieve stored user data
  var users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the user exists
  var user = users.find(u => u.username === username && u.password === password);

  if (user) {
      // alert("Login successful");

      // Redirect to the welcome page
      window.location.href = "welcome.html";
  } else {
      alert("Invalid username or password");
  }
}

function signup() {
  var username = document.getElementById("signupUsername").value;
  var password = document.getElementById("signupPassword").value;

  // Retrieve stored user data
  var users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the username is already taken
  if (users.some(u => u.username === username)) {
      alert("Username already taken. Please choose a different username.");
      return;
  }

  // Add the new user
  users.push({ username, password });

  // Save the updated user data
  localStorage.setItem("users", JSON.stringify(users));

  alert("Sign Up successful");

  // Redirect to the welcome page
  window.location.href = "welcome.html";
}