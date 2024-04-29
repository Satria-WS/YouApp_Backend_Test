import mongoose, { Document, Schema } from "mongoose";

// Define an interface for the message document
interface MessageDocument extends Document {
  sender: string;
  recipient: string;
  message: string;
  timestamp?: Date;
}

const messageModule = new mongoose.Schema({
  // sender: { type: String, required: true },
  recipient: { type: String, required: true },
  sender: { type:Schema.Types.ObjectId, ref:"User" },
  // recipient:{ type:Schema.Types.ObjectId, ref:"User", required:true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const messageSchema = mongoose.model<MessageDocument>("Message", messageModule);
