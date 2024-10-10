import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import schoolRoutes from './routes/schoolRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use('/api/auth', authRoutes);
app.use('/api/schools', schoolRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
