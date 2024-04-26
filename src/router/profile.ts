import express from "express";
import { createProfile, getAllProfiles, getProfileById, updateProfile } from "../controller/ProfileController";
import { isAuthenticated } from "../middlewares/index";

export default (router: express.Router) => {
  router.get("/api/profiles", isAuthenticated, getAllProfiles);
  router.get("/api/profiles/:id", isAuthenticated, getProfileById);
  router.post("/api/profiles", isAuthenticated, createProfile);
  router.patch("/api/profiles/:id",isAuthenticated,updateProfile)
};
