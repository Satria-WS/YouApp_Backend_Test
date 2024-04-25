import express from 'express';

export const getAllProfiles = async (req: express.Request, res: express.Response) => {
  try {
    return res.status(200).send("hello world")
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}