import { Router } from "express";
const router = Router();

import {
  postBookDetails,
  getBookDetails,
  getBookDetailsById,
  updateBookDetails,
  deleteBookDetails,
} from "../controller/book.controller.js";

router.route("/").post(postBookDetails);
router.route("/").get(getBookDetails);
router.route("/:bookId").get(getBookDetailsById);
router.route("/:bookId").patch(updateBookDetails);
router.route("/:bookId").delete(deleteBookDetails);

export default router;
