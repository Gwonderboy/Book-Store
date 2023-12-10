import {Request, Response} from 'express';
import { Book } from '../../model/book';

export const retrieveAllBooks = async (request:Request, response:Response)=>{
    try{
        const bookInfo = await Book.find({});

        if (!bookInfo) {
            return response.status(404).json({
              message: `Book not valid`,
            });
        }
    return response.status(200).json({message: `Books fetched successfully`, bookInfo})
    }catch(err:any){
        return response.status(500).json({
            message: err.message
        })
    }
}