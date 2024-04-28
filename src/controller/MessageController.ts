import mongoose from 'mongoose';
import { messageSchema } from '../Models/message';
import express from 'express';


export const sendMessage = async (req: express.Request, res: express.Response) => {
  try {
    const { recipient, message,sender } = req.body;
    // const sender = req.user.userId; // Assuming authenticated user
    // const sender = req.user._id; // Assuming authenticated user
    const senderId = req.params.id;
  

    // Create a new message document
    const newMessage = new messageSchema({
      sender,
      recipient,
      message
    });

    // // Save the message to the database
    // await newMessage.save();
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