import express from "express";
import { createProfile, getAllProfiles } from "../controller/ProfileController";
import { isAuthenticated } from "../middlewares/index";

export default (router: express.Router) => {
  router.get("/profiles", isAuthenticated, getAllProfiles);
  router.post("/profiles", isAuthenticated, createProfile);
};
