import mongoose from "mongoose";

const profileModel = new mongoose.Schema({
  displayName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum:["male","female"],
    required: true
  },
  birthday: {
    type: String,
    required: true
  },
  horoscope: {
    type: String,
    required: true
  },
  zodiac: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  weigth: {
    type: Number,
    required: true
  }
})
export const profileSchema = mongoose.model("User", profileModel);

