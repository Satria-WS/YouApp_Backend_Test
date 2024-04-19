import express, { Request, Response } from "express";
import { getUserByEmail ,getUserByUsername , createUser } from "../action/users";
import { random, authentication } from "../helpers/index";
import { validationEmail } from "../validation/UserValidation";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password, username } = req.body;

    // Check if email/username and password are provided
    if ((!email && !username) || !password) {
      return res.sendStatus(400);
    }

    let user;
    // Find user by email
    if (email) {
      user = await getUserByEmail(email).select('+authentication.salt +authentication.password');
    } else {
      // Find user by username
      user = await getUserByUsername(username).select('+authentication.salt +authentication.password');
    }

    // If user does not exist, return error
    if (!user) {
      return res.status(400).json({ message: email ? "Email not found" : "Username not found" });
    }

    // Compare passwords
    const expectedHash = authentication(user.authentication.salt, password);
    if (user.authentication.password !== expectedHash) {
      return res.status(403).json({ message: "Incorrect password" });
    }

    // Generate session token
    const salt = random();
    user.authentication.sessionToken = authentication(salt, user._id.toString());
    await user.save();

    // Set session token in cookie
    res.cookie('APP-AUTH', user.authentication.sessionToken, {
      domain: 'localhost',
      path: '/',
      httpOnly: true,
      maxAge: 300000
      // secure: process.env.NODE_ENV === "production",
      // sameSite: 'strict'
    });

    // Send success response
    return res.status(200).json({
      data: user,
      message: 'Login successful'
    });
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
}

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, username } = req.body;

    //if missing email , pass, user will error
    if (!email || !password || !username) {
      return res.sendStatus(400);
    }

    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use" });
    }

    // const validationEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!validationEmail.test(email)) {
    //   return res.status(400).json({ message: "Invalid email" });
    // }

    //if input email was wrong will be invalid
    if (!validationEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }
    const salt = random();
    const hashedPassword = authentication(salt, password);
    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: hashedPassword,
      },
    });
    return res
      .status(200)
      .json({
        data: user,
        message: "create user succesfull",
      })
      .end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400).json({ message: error.message });
  }
};
