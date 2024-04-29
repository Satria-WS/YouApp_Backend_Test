import express from 'express';


import { getAllUsers , deleteUser,getUsersById } from '../controller/UserController';
import { isAuthenticated, isOwner } from '../middlewares/index';


export default (router: express.Router) => {
  router.get('/api/users', isAuthenticated, getAllUsers);
  router.get('/api/users/:id',isAuthenticated,getUsersById)
  router.delete('/api/users/:id',isAuthenticated,isOwner,deleteUser);
}