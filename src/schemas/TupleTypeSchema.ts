import { TSBufferSchema } from "../models/TSBufferSchema";

export interface TupleTypeSchema {
    type: 'Tuple';
    elementTypes: TSBufferSchema[];
    optionalStartIndex?: number;
}