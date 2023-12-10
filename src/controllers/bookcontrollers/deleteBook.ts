import {Request, Response} from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { Book } from '../../model/book';
import { User } from '../../model/user';

export const deleteBook = async(request:JwtPayload, response:Response) => {
    try{
        const id = request.params.id;
        const book = await Book.deleteOne({_id: request.params.id})

        if(!id){
            return response.status(400).json({
                status: 'Bad request',
                message: 'Book ID is required for deletion'
            });
        }

        if(book.deletedCount === 0){
            return response.status(400).json({
                status: 'Failed',
                message: 'Book does not exist'
            });
        }
        return response.status(200).json({
            status: `Successful`,
            message: `This book has been deleted successfully.`,
            
        })
    }catch(err:any){
        response.status(500).json({
            message: err.message
        })
    }
}