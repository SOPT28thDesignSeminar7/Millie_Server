"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Highlight_1 = require("./Highlight");
const BookSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
    },
    highlightCount: {
        type: Number,
    },
    highlights: [Highlight_1.HighlightSchema],
    image: {
        type: String,
    }
});
exports.default = mongoose_1.default.model("Book", BookSchema);
//# sourceMappingURL=Book.js.map