import { BaseSchema } from '../BaseSchema';
import { TSBufferSchema } from '../TSBufferSchema';

export interface TupleTypeSchema extends BaseSchema {
    type: 'Tuple';
    elementTypes: TSBufferSchema[];
}