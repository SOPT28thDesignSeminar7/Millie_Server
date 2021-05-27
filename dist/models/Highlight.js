"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HighlightSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dateFormatter_1 = require("../formatter/dateFormatter");
exports.HighlightSchema = new mongoose_1.default.Schema({
    highlightText: {
        type: String,
    },
    highlightDate: {
        type: String,
        default: dateFormatter_1.dateFormatter(),
    }
}, { _id: false });
//# sourceMappingURL=Highlight.js.map