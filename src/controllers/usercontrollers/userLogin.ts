import { Express, Request, Response, NextFunction } from "express"
import { generateToken } from "../../utilities/helpers";
import bcrypt from "bcryptjs";
import { User } from "../../model/user";

export const userLogin = async (req: Request, res: Response) => {
  try {
    //fetch the email and password from the frontend
    const { email, password } = req.body;

    const user = await User.findOne({email})

    if (!user) {
      return res.status(404).json({
        status: `Access denied`,
        message: `This email or password does not exist`,
      });
    }

    //check and compare passwords (user's password in database with incoming password)
    const validate = await bcrypt.compare(password, user.password);

    if (validate) {
      const data = {
        _id: user._id,
        email: user.email,
      };
      console.log(data)
      const token = generateToken(data);

      return res.status(200).json({
        message: `Welcome back ${user.firstName}`,
        token,
        user,
      });
    }
    return res.status(400).json({
      status: `Error`,
      message: `Your email or password is invalid`,
    });
  } catch (err: any) {
    res.status(400).json({
      status: `Error`,
      method: req.method,
      message: err.message
  })
  }
};
