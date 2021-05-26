import mongoose from "mongoose";
import { IHighlight } from "../interfaces/IHighlight";

export const HighlightSchema = new mongoose.Schema({
  highlightText: {
    type: String,
  },
  highlightDate: {
    type: Date,
    default: Date.now,
  }
}, { _id: false });