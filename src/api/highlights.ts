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
    const book = await Book.findOne({_id:req.params.id},{"__v":0});

    if (!book) {
      res.json({
        "status": 404,
        "message": "해당되는 책이 없습니다."
      });
    }

    res.json({ 
      "status": 200,
      "data": book
     });
  } catch (error) {
    console.error(error.message);
    res.json({
      "status": 500,
      "message": "Server Errror"
    });
  }
});

module.exports = router;