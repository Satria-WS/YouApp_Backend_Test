import { ProfileSchema } from '../Models/profile';
import express from 'express';

export const getAllProfiles = async (req: express.Request, res: express.Response) => {
  try {
    const profile = await ProfileSchema.find();
    // return res.status(200).send("hello world")
    return res.status(200).json({
      data: profile,
      message:"get Profile succesfull"
    })
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}


export const createProfile = async (req: express.Request, res: express.Response) => {
  try {
    const { displayName, gender, birthday,  height, weight } = req.body;

       // Check if required fields are missing
       if (!displayName || !gender || !birthday || !height || !weight) {
        return res.status(400).json({ error: "Missing required fields" });
      }
    //   //check if type data
      if (typeof displayName !== 'string' || typeof gender !== 'string' || typeof birthday !== 'string'  || typeof height !== 'number' || typeof weight !== 'number') {
      return res.status(400).json({ error: "Invalid data format" });
    }
    
    const createProfile = await ProfileSchema.create({
      ...req.body,
      birthday: new Date(birthday).toISOString(),
    });
    return res.status(200).json({
      data: createProfile,
      message:"create profile sucessfull"
    })
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}