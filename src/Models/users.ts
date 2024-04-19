import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  authentication: {
    password: {
      type: String,
      required: true,
      select: false
    },
    salt: {
      type: String,
      select: false
    },
    sessionToken: {
      type: String,
      select: false
    }

  }
});

export const UserSchema = mongoose.model("User", userModel);


//action user
// export const getUsers = () => UserSchema.find();
// export const getUserByEmail = (email: string) => UserSchema.findOne({ email });
// export const getUserBySessionToken = (sessionToken: string) =>
//   UserSchema.findOne({
//     "authentication.sessionToken": sessionToken,
//   });

// export const getUserById = (id: string) => UserSchema.findById(id);
// export const createUser = (values: Record<string, any>) =>
//   new UserSchema(values).save().then((user) => user.toObject());
// export const deleteUserById = (id: string) => UserSchema.findOneAndDelete({ _id: id });
// export const updateUserById = (id: string, values: Record<string, any>) => UserSchema.findByIdAndUpdate(id, values);