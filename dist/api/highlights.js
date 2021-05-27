"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Book_1 = __importDefault(require("../models/Book"));
const router = express_1.default.Router();
/**
 * @router GET api/books/:id
 * @desc Get book info
 * @access Private
 */
router.get("/", async (req, res) => {
    res.send("통신 성공");
});
router.get("/:id", async (req, res) => {
    try {
        //필터링을 통해 해당 아이디의 책만 가져옴
        const book = await Book_1.default.findOne({ _id: req.params.id }, { "__v": 0 });
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
    }
    catch (error) {
        console.error(error.message);
        res.json({
            "status": 500,
            "message": "Server Errror"
        });
    }
});
module.exports = router;
//# sourceMappingURL=highlights.js.map