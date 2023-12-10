import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    pageCount: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    ownerId: {
        type: String,
        unique: true
    }
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("Books", bookSchema);
