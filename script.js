// Mock user database
let users = [];
let currentUser = null;

// Show signup form
function showSignup() {
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('signup-form').classList.remove('hidden');
}

// Show login form
function showLogin() {
  document.getElementById('signup-form').classList.add('hidden');
  document.getElementById('login-form').classList.remove('hidden');
}

// Signup function
function signup() {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const referralCode = document.getElementById('referral-code').value;

  if (!email || !password) {
    alert('Please fill all required fields.');
    return;
  }

  users.push({ email, password, points: referralCode ? 300 : 0 });
  alert('Signup successful!');
  showLogin();
}

// Login function
function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    currentUser = user;
    document.getElementById('user-email').innerText = currentUser.email;
    document.getElementById('user-points').innerText = currentUser.points;

    document.getElementById('auth-container').classList.add('hidden');
    document.getElementById('main-container').classList.remove('hidden');
  } else {
    alert('Invalid email or password.');
  }
}

// Show selected tab
function showTab(tabName) {
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => section.classList.add('hidden'));

  document.getElementById(tabName).classList.remove('hidden');
}

// Task completion
function completeTask() {
  currentUser.points += 100;
  document.getElementById('user-points').innerText = currentUser.points;
  alert('Task completed!');
}

// Withdraw function
function withdraw() {
  if (currentUser.points < 500) {
    alert('Not enough points to withdraw.');
    return;
  }

  const method = document.getElementById('withdraw-method').value;
  currentUser.points -= 500;
  document.getElementById('user-points').innerText = currentUser.points;
  alert(`Withdrawal of 500 points via ${method} successful.`);
}
function startTelegramTask() {
  window.open("https://t.me/RabbitAnnounce", "_blank"); // Open Telegram link
  const claimButton = document.getElementById("claim-telegram");
  claimButton.classList.remove("hidden"); // Show "Claim" button
}

function claimTelegramReward() {
  const claimButton = document.getElementById("claim-telegram");
  const completedText = document.getElementById("completed-telegram");

  claimButton.classList.add("hidden"); // Hide "Claim" button
  completedText.classList.remove("hidden"); // Show "Completed" text
  alert("You have earned 100 points!"); // Reward notification
}
function startTelegramTask() {
  // Open Telegram channel link in a new tab
  const telegramUrl = "https://t.me/RabbitAnnounce";
  window.open(telegramUrl, "_blank");

  // Show the Claim button and hide the Start button
  const startButton = document.querySelector("#telegram-task .start-button");
  const claimButton = document.querySelector("#telegram-task .claim-button");

  startButton.classList.add("hidden"); // Hide "Start" button
  claimButton.classList.remove("hidden"); // Show "Claim" button
}

function claimTelegramReward() {
  // Hide the Claim button and show the Completed status
  const claimButton = document.querySelector("#telegram-task .claim-button");
  const completedText = document.querySelector("#telegram-task .completed");

  claimButton.classList.add("hidden"); // Hide "Claim" button
  completedText.classList.remove("hidden"); // Show "✔ Completed"

  // Notify the user about the reward
  alert("You have earned 100 points!");
}
// Function to handle withdrawal and send message to Telegram
function withdraw() {
  const availablePoints = document.getElementById("available-points").innerText;
  const withdrawMethod = document.getElementById("withdraw-method").value;
  
  // Check if user has enough points
  if (parseInt(availablePoints) >= 500) {
    // Call the function to send a message to Telegram
    sendTelegramMessage(availablePoints, withdrawMethod);

    // Display withdrawal message
    document.getElementById("withdraw-msg").innerText = `You have successfully withdrawn ${availablePoints} points via ${withdrawMethod}.`;
    document.getElementById("withdraw-msg").style.color = 'green';
  } else {
    // Insufficient points message
    document.getElementById("withdraw-msg").innerText = "You don't have enough points to withdraw.";
    document.getElementById("withdraw-msg").style.color = 'red';
  }
}

// Function to send a message to your Telegram bot
function sendTelegramMessage(points, method) {
  const botApiUrl = `https://api.telegram.org/bot7964884864:AAEj1JexHwWwSwZQr36vd5c2ho_SPydZ6N0/sendMessage`;
  const message = `A user has withdrawn points:\nPoints: ${points} 💸\nWithdrawal Method: ${method}\nPlease review the transaction.`;
  const chatId = '@Ayubali11211';

  // Send a message to your Telegram chat using Fetch API
  fetch(`${botApiUrl}?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        console.log("Telegram message sent successfully.");
      } else {
        console.log("Failed to send Telegram message.");
      }
    })
    .catch(error => {
      console.error("Error sending Telegram message:", error);
    });
}
// Function to handle withdrawal and send message to Telegram
function withdraw() {
  const availablePoints = parseInt(document.getElementById("available-points").innerText); // Get points
  const withdrawMethod = document.getElementById("withdraw-method").value;
  const minWithdrawal = 500; // Minimum withdrawal points

  // Check if user has enough points
  if (availablePoints >= minWithdrawal) {
    // Call the function to send a message to Telegram
    sendTelegramMessage(availablePoints, withdrawMethod);

    // Display withdrawal message
    document.getElementById("withdraw-msg").innerText = `You have successfully withdrawn ${availablePoints} points via ${withdrawMethod}.`;
    document.getElementById("withdraw-msg").style.color = 'green';
  } else {
    // Display insufficient points message
    document.getElementById("withdraw-msg").innerText = `You need at least ${minWithdrawal} 💸 to withdraw.`;
    document.getElementById("withdraw-msg").style.color = 'red';
  }
}

// Function to send a message to your Telegram bot
function sendTelegramMessage(points, method) {
  const botApiUrl = `https://api.telegram.org/bot7964884864:AAEj1JexHwWwSwZQr36vd5c2ho_SPydZ6N0/sendMessage`;
  const message = `A user has withdrawn points:\nPoints: ${points} 💸\nWithdrawal Method: ${method}\nPlease review the transaction.`;
  const chatId = '@Ayubali11211';

  // Send a message to your Telegram chat using Fetch API
  fetch(`${botApiUrl}?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        console.log("Telegram message sent successfully.");
      } else {
        console.log("Failed to send Telegram message.");
      }
    })
    .catch(error => {
      console.error("Error sending Telegram message:", error);
    });
}