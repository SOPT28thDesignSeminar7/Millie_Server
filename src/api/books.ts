import express, { Request, Response } from "express";

import Book from "../models/Book";

const router = express.Router();

/**
 * @router GET api/books/
 * @desc Get all books
 * @acceess Private
 */
router.get("/", async (req: Request, res: Response) => {
  try {
    const books = await Book.find({}, { "__v": 0, "highlights": { $slice: 1 } });

    res.json({ 
      "status": 200,
      "data": {
        "books": books
      }
     });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;