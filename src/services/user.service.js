import { User } from '../models/user.model.js';

export async function getAllUsers() {
  return User.find().lean();
}

export async function getUserById(id) {
  return User.findById(id).lean();
}

export async function createUser(data) {
  const exists = await User.exists({ email: data.email });
  if (exists) throw new Error('Email already in use');
  return User.create(data);
}

export async function updateUser(id, data) {
  return User.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  }).lean();
}

export async function deleteUser(id) {
  return User.findByIdAndDelete(id).lean();
}
