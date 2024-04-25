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
  weight: {
    type: Number,
    required: true
  }
})
export const ProfileSchema = mongoose.model("Profile", profileModel);

// const doc = new ProfileSchema({
//   displayName: "John Doe",
//   gender: "male",
//   birthday: "1990-01-01",
//   horoscope: "Aquarius",
//   zodiac: "Capricorn",
//   height: 180,
//   weight: 75
// });

// doc.save().then(savedDoc => {
//   savedDoc === doc; // true
// });