import express from 'express';

import { getUsers,deleteUserById , getUserById ,updateUserById} from '../action/users';

export const getAllUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await getUsers();
    return res.status(200).json({
      data: users,
      message:"get User succesfull"
    })
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const getUsersById = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const users = await getUserById(id);
    return res.status(200).json({
      data: users,
      message:"get User by Id succesfull"
    })
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const deleteUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUserById(id);

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const updateUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { username } = req.body;

    if (!username) {
      return res.sendStatus(400);
    }

    const user = await updateUserById(id , username);
    
    user.username = username;
    await user.save();

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}
