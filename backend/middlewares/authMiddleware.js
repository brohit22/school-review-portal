import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';

const auth = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId);
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Not authorized' });
  }
};

export default auth;
