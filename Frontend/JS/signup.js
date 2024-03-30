document.getElementById("nav").addEventListener("click", () => {
  window.location.href = "index.html";
});
const form = document.querySelector("#form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  onSignUp();
});
const showMessage = (message, destination) => {
  const messageCard = document.getElementById("message-card");
  const messageText = document.getElementById("message-text");
  messageText.textContent = message;
  messageCard.style.display = "block";
  setTimeout(() => {
    messageCard.style.display = "none";
    window.location.href = destination;
  }, 2000);
};

const onSignUp = () => {
  const payload = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  fetch("http://localhost:4000/users/register", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log("Response from server:", data);
      if (data.message === "User registered successfully") {
        showMessage("Registration successful", "login.html");
      } else {
        showMessage("Registration failed. Please try again.", "signup.html");
      }
    })
    .catch((err) => {
      console.error("Fetch Error:", err);
      showMessage(
        "Error during registration. Please try again later.",
        "signup.html"
      );
    });
};
