import { TSBufferSchema } from "../models/TSBufferSchema";

/**
 * TypeScript Tuple Type
 * It has less encoded size than `Array`.
 * 
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types}
 */
export interface TupleTypeSchema {
    type: 'Tuple';
    elementTypes: TSBufferSchema[];
    optionalStartIndex?: number;
}