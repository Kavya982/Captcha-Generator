// Array of possible characters for the CAPTCHA
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// Generate a random CAPTCHA string
function generateCaptcha() {
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
}

// Function to display the CAPTCHA
function displayCaptcha() {
  let captchaDiv = document.getElementById("captcha");
  captchaDiv.innerText = generateCaptcha();
}

// Function to check the user's input
function checkCaptcha() {
  let userInput = document.getElementById("userInput").value;
  let captcha = document.getElementById("captcha").innerText;

  if (userInput === captcha) {
    alert("CAPTCHA verification successful!");
  } else {
    alert("CAPTCHA verification failed. Please try again.");
  }

  // Generate a new CAPTCHA after verification
  displayCaptcha();
}

// Display the initial CAPTCHA
displayCaptcha();





