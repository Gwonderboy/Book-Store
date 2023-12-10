import {Request, Response} from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { Book } from '../../model/book';

export const editBook = async(request:JwtPayload, response:Response) => {
    try{
        const id = request.params.id;
        const book = await Book.updateOne({_id: request.params.id}, request.body)

        if(!id){
            return response.status(400).json({
                status: 'Bad request',
                message: 'Book ID is required for get book'
            });
        }
        if (!book){
            return response.status(404).json({
              message: `Book not valid`,
            });
        }
        return response.status(200).json({
            status: `Operation successful`,
            message: `This book has been edited successfully.`,
            data: book,
        })

    }catch(err:any){
        response.status(500).json({
            message: err.message
        })
    }
}