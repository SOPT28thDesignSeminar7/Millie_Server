import mongoose from 'mongoose';
import {IHighlight} from "./IHighlight";

export interface IBook{
    id: mongoose.Types.ObjectId;
    title:string;
    author:string;
    highlightCount:Number;
    image:string;
    highlights:[IHighlight];
}