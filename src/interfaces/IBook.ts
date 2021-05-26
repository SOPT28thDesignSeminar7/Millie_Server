import * as mongoose from 'mongoose';
import {IHighlight} from "./IHighlight";

export interface IBook{
    id: mongoose.Types.ObjectId;
    title:string;
    author:string;
    highlightCount:string;
    image:string;
    highlights:[IHighlight];
}