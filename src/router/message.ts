import express from 'express';

import { sendMessage } from '../controller/MessageController';
import { isAuthenticated } from '../middlewares/index';

export default (router: express.Router) => {
  router.post("/api/message", isAuthenticated, sendMessage);
  // router.get('/api/vieMessage',isAuthenticated)
}

