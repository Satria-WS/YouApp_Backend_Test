import express from "express";
import { getAllProfiles } from "../controller/ProfileController";
import { isAuthenticated } from "../middlewares/index";


export default (router: express.Router) => {
  router.get("/profile", isAuthenticated, getAllProfiles);
};
