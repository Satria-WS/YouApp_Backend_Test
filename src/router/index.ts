import express from 'express';
import authentication from './authentication';
import users from './users';
import profiles from "./profile";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  profiles(router)
  return router;
}