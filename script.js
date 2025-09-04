// Simulate user login status
let isLoggedIn = false;

function handleApply() {
  if (!isLoggedIn) {
    window.location.href = "login.html";
  } else {
    window.location.href = "scholarships.html";
  }
}

// Fake login function
function loginUser(event) {
  event.preventDefault();
  isLoggedIn = true;
  alert("Login successful! Redirecting to scholarships...");
  window.location.href = "scholarships.html";
}
