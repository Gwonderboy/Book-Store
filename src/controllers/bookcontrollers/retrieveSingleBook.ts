import { Express, Request, Response} from 'express';
import fs from 'fs';
import { Book } from '../../model/book';

export const retrieveSingleBook = async(request:Request, response:Response) => {
    try{
        //get the book id from the params
        const id = request.params.id

        const bookInfo = await Book.findOne({_id: request.params.id});

        if(!id){
            return response.status(400).json({
                status: 'Bad request',
                message: 'Book ID is required to view this page'
            });
        }
        if (!bookInfo) {
            return response.status(404).json({
              message: `Book not valid`,
            });
        }

        //return book
        return response.status(200).json({
            message: `${bookInfo.title} found successfully`,
            bookInfo
        }) 
    }catch(err:any){
        return response.status(500).json({
            message: err.message
        })
    }
}