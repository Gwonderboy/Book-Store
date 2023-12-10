import { Express, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { Book } from "../../model/book";

export const createBook = async (req: JwtPayload, res: Response) => {
  try {
    const userId = req.user._id

    const book = new Book({
        ...req.body,
        ownerId: userId
    });
    await book.save();

    res.status(200).json({
      status: `Successful`,
      method: req.method,
      message: `Your book has been successfully created`,
      data: book,
    });
  } catch (error: any) {
    res.status(400).json({
      status: `error`,
      method: req.method,
      message: error.message,
    });
  }
};
