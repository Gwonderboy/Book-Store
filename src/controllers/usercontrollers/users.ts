import { Express, Request, Response, NextFunction } from "express"
import { User } from "../../model/user"
import { hashPassword } from "../../utilities/helpers"

export const registerUser = async(req:Request, res:Response, next:NextFunction) => {
    try {
        
        const hash = await hashPassword(req.body.password)
        
        const user = new User ({
            ...req.body,
            password: hash,
        })
        await user.save();

        res.status(200).json({
            status: `Successful`,
            method: req.method,
            message: `You have been successfully registered`,
            data: user
        })    
        
    } catch (error:any) {
        res.status(400).json({
            status: `error`,
            method: req.method,
            message: error.message
        })
    }
}

