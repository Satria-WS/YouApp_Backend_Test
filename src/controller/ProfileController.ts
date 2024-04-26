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

// Function to check if a string is a valid date
const isValidDate = (dateString: string): boolean => {
  const regEx = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateString.match(regEx)) return false;  // Invalid format
  const d = new Date(dateString);
  const dNum = d.getTime();
  if (!dNum && dNum !== 0) return false; // NaN value, invalid date
  return d.toISOString().slice(0, 10) === dateString;
};
export const createProfile = async (req: express.Request, res: express.Response) => {
  try {
    const { displayName, gender, birthday, horoscope, zodiac, height, weight } = req.body;

       // Check if required fields are missing
       if (!displayName || !gender || !birthday || !height || !weight) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      //check if type data
      if (typeof displayName !== 'string' || typeof gender !== 'string' || typeof birthday !== 'string' || typeof horoscope !== 'string' || typeof zodiac !== 'string' || typeof height !== 'number' || typeof weight !== 'number') {
      return res.status(400).json({ error: "Invalid data format" });
    }
    
    const createProfile = await ProfileSchema.create({
      displayName: displayName,
      gender: gender,
      birthday: birthday,
      horoscope: horoscope,
      zodiac:zodiac,
      height: height,
      weight: weight
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