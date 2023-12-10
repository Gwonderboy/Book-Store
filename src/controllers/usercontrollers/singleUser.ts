import { Request, Response } from "express";
import { JwtPayload } from 'jsonwebtoken';
import { User } from "../../model/user";

export const singleUser = async(request:JwtPayload, response:Response) => {
    try{
        //get the user id from the params
        const id = request.params._id

        //read from database
        const userInfo = await User.findOne({_id: request.params.id});
        if (!userInfo)
          return response.status(404).json({
            message: `Database not valid`,
          });
        return response.status(200).json({
            message: `User found successfully`,
            data: userInfo
        }) 
    }catch(err:any){
        console.log(err.message)
        return response.status(500).json({
            message: `Internal Server Error`
        })
    }
}