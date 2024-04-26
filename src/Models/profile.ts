import mongoose, { Document } from "mongoose";



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

// profileModel.pre('save', function (next) {
//   const birthday = this.birthday;
//   const month = birthday.getMonth() + 1; // getMonth() returns 0-based index
//   const day = birthday.getDate();

//     // Calculate horoscope
//     const horoscopes = [
//       "Capricornus (Goat)",
//       "Aquarius (Water Bearer)",
//       "Pisces (Fish)",
//       "Aries (Ram)",
//       "Taurus (Bull)",
//       "Gemini (Twins)",
//       "Cancer (Crab)",
//       "Leo (Lion)",
//       "Virgo (Virgin)",
//       "Libra (Balance)",
//       "Scorpius (Scorpion)",
//       "Sagittarius (Archer)"
//     ];
//     const horoscopeIndex = (month + (day > 20 ? 1 : 0) - 1) % 12;
//     this.horoscope = horoscopes[horoscopeIndex];
  
//     // Calculate zodiac
//     const zodiacSigns = [
//       "Capricornus",
//       "Aquarius",
//       "Pisces",
//       "Aries",
//       "Taurus",
//       "Gemini",
//       "Cancer",
//       "Leo",
//       "Virgo",
//       "Libra",
//       "Scorpio",
//       "Sagittarius"
//     ];
//     const zodiacIndex = (month + (day > 20 ? 1 : 0) - 1) % 12;
//     this.zodiac = zodiacSigns[zodiacIndex];
  
//     next();
// })
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