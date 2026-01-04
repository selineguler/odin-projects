document.getElementById("account").addEventListener("click", function () {
  // Collect form values
  const name = document.getElementById("name").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const mail = document.getElementById("mail").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirm = document.getElementById("confirm").value.trim();

  
  if (!name || !lname || !mail || !phone || !password || !confirm) {
    alert("Please fill in all fields.");
    return;
  }

  
  if (password !== confirm) {
    alert("Passwords do not match!");
    return;
  }

  const user = { name, lname, mail, phone, password };
  localStorage.setItem("registeredUser", JSON.stringify(user));

  alert("Registration successful! Redirecting to login page...");

  window.location.href = "login.html";
});

document.getElementById("login-link").addEventListener("click", function (event) {
  event.preventDefault(); 
  window.location.href = "login.html";
});

