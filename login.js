// Helper: Save user to localStorage
function saveUser(username, password) {
  localStorage.setItem('evswap_user', JSON.stringify({ username, password }));
}

// Helper: Get user from localStorage
function getUser() {
  const user = localStorage.getItem('evswap_user');
  return user ? JSON.parse(user) : null;
}

// Login logic
document.getElementById('login-btn').onclick = function () {
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();
  const user = getUser();

  if (user && username === user.username && password === user.password) {
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    document.getElementById('login-error').classList.add('hidden');
  } else {
    document.getElementById('login-error').classList.remove('hidden');
  }
};

// Registration logic
document.getElementById('register-btn').onclick = function () {
  const username = document.getElementById('register-username').value.trim();
  const password = document.getElementById('register-password').value.trim();
  const confirm = document.getElementById('register-confirm').value.trim();
  const errorDiv = document.getElementById('register-error');

  if (!username || !password || !confirm) {
    errorDiv.textContent = "All fields are required.";
    errorDiv.classList.remove('hidden');
    return;
  }
  if (password !== confirm) {
    errorDiv.textContent = "Passwords do not match.";
    errorDiv.classList.remove('hidden');
    return;
  }
  saveUser(username, password);
  errorDiv.classList.add('hidden');
  // Switch to login after successful registration
  document.getElementById('register-section').classList.add('hidden');
  document.getElementById('login-section').classList.remove('hidden');
  // Optionally, pre-fill username
  document.getElementById('login-username').value = username;
  document.getElementById('login-password').value = '';
  document.getElementById('login-error').classList.add('hidden');
};