const User = require('../models/User.js');
const generateToken = require('../config/generateToken.js');

const registerUser = async (req, res) => {
  const { name, badgeNumber, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    const user = await User.create({
      name,
      badgeNumber,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        badgeNumber: user.badgeNumber,
        email: user.email,
        role: user.role,
        status: user.status,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const authUser = async (req, res) => {
  const { badgeNumber, password } = req.body;

  try {
    const user = await User.findOne({ badgeNumber });

    if (user && (await user.matchPassword(password))) {
      if (user.status === 'Pending') {
        res.status(403).json({ message: 'Account pending admin approval' });
        return;
      }
      if (user.status === 'Suspended') {
        res.status(403).json({ message: 'Account suspended' });
        return;
      }

      res.json({
        _id: user._id,
        name: user.name,
        badgeNumber: user.badgeNumber,
        email: user.email,
        role: user.role,
        status: user.status,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid badge number or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, authUser };
