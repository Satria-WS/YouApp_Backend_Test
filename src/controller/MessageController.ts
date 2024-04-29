import mongoose from 'mongoose';
import { messageSchema } from '../Models/message';
import express, {Request} from 'express';

interface IUser {
  _id: string;
  username: string;
  email: string;
  authentication: {
    password: string;
    salt: string;
    sessionToken: string;
  };
  __v: number;
}


// declare global {
//   namespace Express {
//     interface Request {
//       user?: IUser; // Define the user property on the Request object
//     }
//   }
// }


declare module 'express' {
  interface Request {
    user?: IUser; // Define the user property on the Request object
  }
}

export const sendMessage = async (req: express.Request, res: express.Response) => {
  try {
    const { recipient, message,sender } = req.body;
    // const sender = req.user.userId; // Assuming authenticated user
    const senderId = req.params.id;
  //  const sender: string = req.user._id; // Assuming authenticated user
   
  

    // Create a new message document
    const newMessage = new messageSchema({
      sender:sender,
      recipient :recipient,
      message:message
    });

    // // Save the message to the database
    await newMessage.save();
    //  return res.status(201).json({ message: 'Message sent successfully' });

    return res.status(200).json({
      data: newMessage,
      message:"Message create sucessfull"
    })
  } catch (error) {
    console.error('Error sending message:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};