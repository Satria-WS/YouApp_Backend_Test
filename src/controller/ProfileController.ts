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
    const { displayName, gender, birthday, horoscope, zodiac, height, weight } = req.body;
    if (!displayName || !gender || !birthday || !horoscope || !zodiac || !height || !weight) {
      return res.sendStatus(400);
    }

    if (typeof displayName !== 'string' || typeof gender !== 'string' || typeof birthday !== 'string' || typeof horoscope !== 'string' || typeof zodiac !== 'string' || typeof height !== 'number' || typeof weight !== 'number') {
      return res.status(400).json({ error: "Invalid data format" });
    }
    
    const createProfile = await ProfileSchema.create(req.body);
    return res.status(200).json({
      data: createProfile,
      message:"create profile sucessfull"
    })
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}