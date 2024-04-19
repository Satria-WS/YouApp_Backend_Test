import { UserSchema } from "../Models/users";

//action user
export const getUsers = () => UserSchema.find();
export const getUserByEmail = (email: string) => UserSchema.findOne({ email });
export const getUserByUsername = (username: string) => UserSchema.findOne({ username });
export const getUserBySessionToken = (sessionToken: string) =>
  UserSchema.findOne({
    "authentication.sessionToken": sessionToken,
  });

export const getUserById = (id: string) => UserSchema.findById(id);
export const createUser = (values: Record<string, any>) =>
  new UserSchema(values).save().then((user) => user.toObject());
export const deleteUserById = (id: string) =>
  UserSchema.findOneAndDelete({ _id: id });
export const updateUserById = (id: string, values: Record<string, any>) =>
  UserSchema.findByIdAndUpdate(id, values);
