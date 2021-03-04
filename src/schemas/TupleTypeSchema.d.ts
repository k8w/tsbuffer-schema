import { TSBufferSchema } from '../TSBufferSchema';

export interface TupleTypeSchema {
    type: 'Tuple';
    elementTypes: TSBufferSchema[];
    optionalStartIndex?: number;
}