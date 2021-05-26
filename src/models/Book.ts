import mongoose from "mongoose";
import {IBook} from "../interfaces/IBook";

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
    highlights: [
        {
        highlightText:
            {type:String,}, //recent
        highlightDate:{
                type:Date,
                default:Date.now, 
            }
        }
        ],
    image:{
        type:String,
    }
    });

    export default mongoose.model<IBook & mongoose.Document>(
        "Book",BookSchema
    );