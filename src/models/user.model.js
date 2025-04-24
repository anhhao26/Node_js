import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name:    { type: String, required: true },
  age:     { type: Number, required: true, min: 1, max: 120 },
  email:   { type: String, required: true, unique: true },
  hobbies: [String]
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
