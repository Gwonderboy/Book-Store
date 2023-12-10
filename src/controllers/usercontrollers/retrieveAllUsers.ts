import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { User } from "../../model/user";

export const retrieveAllUsers = async (
  request: JwtPayload,
  response: Response
) => {
  try {
    let usersData = await User.find({});
    if (!usersData)
      return response.status(404).json({
        message: `Database not valid`,
      });

    return response
      .status(200)
      .json({ message: `Users fetched successfully`, data: usersData });
  } catch (err: any) {
    return response.status(500).json({
      message: err.message,
    });
  }
};
