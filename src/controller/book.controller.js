import { Book } from "../models/book.model.js";
import { ApiError } from "../utills/apiError.js";
import { ApiResponse } from "../utills/apiResponse.js";
import { asyncHandler } from "../utills/asyncHandler.js";

//*****************************************************************************//
//@dec store book details on db
const postBookDetails = asyncHandler(async (req, res) => {
  const { name, author, publishYear } = req.body;

  if (!(name, author, publishYear)) {
    throw new ApiError(400, "fill the fields");
  }

  const bookDetails = await Book.create({ name, author, publishYear });

  return res
    .status(200)
    .json(new ApiResponse(200, bookDetails, "book details save on dbs"));
});
//*****************************************************************************//
//@dec getBookDetails
const getBookDetails = asyncHandler(async (req, res) => {
  const bookDetails = await Book.find();

  if (!bookDetails) {
    throw new ApiError(500, "something went wrong");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, bookDetails, "fetched all the books"));
});
//*****************************************************************************//
//@dec getBookDetailsById
const getBookDetailsById = asyncHandler(async (req, res) => {
  const { bookId } = req.params;

  const getBook = await Book.findById(bookId);

  return res.status(200).json(new ApiResponse(200, getBook, "get book by id"));
});
//*****************************************************************************//
//@dec updateBookDetails
const updateBookDetails = asyncHandler(async (req, res) => {
  const { name, author, publishYear } = req.body;
  const { bookId } = req.params;
  if (!(name, author, publishYear)) {
    throw new ApiError(400, "fill the fields");
  }

  const bookDetails = await Book.findByIdAndUpdate(bookId, {
    name,
    author,
    publishYear,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, bookDetails, "book details UPDATE on dbs"));
});
//*****************************************************************************//
//@dec deleteBookDetails
const deleteBookDetails = asyncHandler(async (req, res) => {
  const { bookId } = req.params;
  const bookDetails = await Book.findByIdAndDelete(bookId);

  return res
    .status(200)
    .json(new ApiResponse(200, "book details deleted on dbs"));
});

export {
  postBookDetails,
  getBookDetails,
  getBookDetailsById,
  updateBookDetails,
  deleteBookDetails,
};
