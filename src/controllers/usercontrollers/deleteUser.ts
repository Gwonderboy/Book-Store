import { Request, Response } from "express";
import { JwtPayload } from 'jsonwebtoken';
import { User } from "../../model/user";

export const deleteUser = async(request:JwtPayload, response:Response) => {
    try{
        const id = request.params.id
        const user = await User.deleteOne({_id: request.params.id})
        
        if(!id){
            return response.status(400).json({
                status: 'Bad request',
                message: 'User ID is required for deletion'
            });
        }
        
        if(user.deletedCount === 0){
            return response.status(400).json({
                status: 'Failed',
                message: 'User does not exist'
            });
        }
        return response.status(200).json({
            status: `Successful`,
            message: `This user has been deleted successfully.`,
            
        })

    }catch(err:any){
        console.log(err.message)
        response.status(500).json({
            message: `Internal Server Error`
        })
    }
}