import mongoose from "mongoose";
import {IBook} from "../interfaces/IBook";
import { HighlightSchema } from "./Highlight";

const BookSchema=new mongoose.Schema({  
    title:{
          type:String,
          required:true
      },
    author:{
        type:String,
    },
    highlightCount:{
        type:Number,
    },
    highlights: [HighlightSchema],
    image:{
        type:String,
    }
    });

    export default mongoose.model<IBook & mongoose.Document>(
        "Book",BookSchema
    );