import express, { Request, Response } from "express";
import { resolve } from "path/posix";

import Book from "../models/Book";

const router = express.Router();

/**
 * @router GET api/books/:id
 * @desc Get book info
 * @access Private
 */

router.get("/",async(req: Request, res: Response)=>{
  res.send("통신 성공");
});
router.get("/:id", async (req: Request, res: Response) => {
  try {
      //필터링을 통해 해당 아이디의 책만 가져옴
    const book = await Book.findOne({_id:req.params.id}).populate("books");
    res.json({ 
      "status": 200,
      "data": {
      "books": book
      }
     });
  } catch (error) {
    console.error(error.message);
    res.status(404).send("해당되는 책이 없습니다.");
  }
});

module.exports = router;