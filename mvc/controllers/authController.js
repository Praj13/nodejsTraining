const userModel = require('../models/userModel');

// Register
exports.register = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ error: 'All fields are required' });

  const existingUser = userModel.users.find(u => u.email === email);
  if (existingUser)
    return res.status(400).json({ error: 'Email already registered' });

  const newUser = {
    id: userModel.getNewId(),
    name,
    email,
    password, // For now, storing plain text (not recommended for real apps)
  };

  userModel.users.push(newUser);
  res.status(201).json({ message: 'User registered successfully' });
};

// Login
exports.login = (req, res) => {
  const { email, password } = req.body;

  const user = userModel.users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  res.json({ message: 'Login successful', userId: user.id });
};

// Forgot Password
exports.forgotPassword = (req, res) => {
  const { email } = req.body;

  const user = userModel.users.find(u => u.email === email);
  if (!user) return res.status(404).json({ error: 'User not found' });

  res.json({ message: 'Password reset link sent (simulated)' });
};

// Change Password
exports.changePassword = (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  const user = userModel.users.find(u => u.email === email && u.password === oldPassword);
  if (!user) return res.status(401).json({ error: 'Invalid email or password' });

  user.password = newPassword;
  res.json({ message: 'Password changed successfully' });
};
