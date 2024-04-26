import express from 'express';
import authentication from './authentication';
import users from './users';
import profiles from "./profile";
import message from "./message";
const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  profiles(router);
  message(router);
  return router;
}