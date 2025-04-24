import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.config.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();
await connectDB();

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
