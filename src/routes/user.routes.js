import { Router } from 'express';
import {
  listUsers,
  getUser,
  addUser,
  editUser,
  removeUser
} from '../controllers/user.controller.js';
import { validateUser } from '../validators/user.validator.js';

const router = Router();

router
  .get('/', listUsers)
  .get('/:id', getUser)
  .post('/', validateUser, addUser)
  .put('/:id', validateUser, editUser)
  .delete('/:id', removeUser);

export default router;
