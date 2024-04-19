import express from 'express';


import { getAllUsers , deleteUser,getUsersById } from '../controller/UserController';
import { isAuthenticated } from '../middlewares/index';


export default (router: express.Router) => {
  router.get('/users', isAuthenticated, getAllUsers);
  router.get('/users/:id',isAuthenticated,getUsersById)
  router.delete('/users/:id',isAuthenticated,deleteUser);
}