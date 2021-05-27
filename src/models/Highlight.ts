import mongoose from "mongoose";
import { IHighlight } from "../interfaces/IHighlight";
import { dateFormatter } from "../formatter/dateFormatter";

export const HighlightSchema = new mongoose.Schema({
  highlightText: {
    type: String,
  },
  highlightDate: {
    type: String,
    default: dateFormatter(),
  }
}, { _id: false });