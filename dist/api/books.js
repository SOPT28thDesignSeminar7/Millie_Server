"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Book_1 = __importDefault(require("../models/Book"));
const router = express_1.default.Router();
/**
 * @router GET api/books/
 * @desc Get all books
 * @acceess Private
 */
router.get("/", async (req, res) => {
    try {
        const books = await Book_1.default.find({}, { "__v": 0, "highlights": { $slice: 1 } });
        res.json({
            "status": 200,
            "data": {
                "books": books
            }
        });
    }
    catch (error) {
        console.error(error.message);
        res.json({
            "status": 500,
            "message": "Server Error"
        });
    }
});
module.exports = router;
//# sourceMappingURL=books.js.map