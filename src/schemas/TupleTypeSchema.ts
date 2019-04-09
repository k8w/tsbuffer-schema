import BaseSchema from '../BaseSchema';
import TSBufferSchema from '../TSBufferSchema';

export default interface TupleTypeSchema extends BaseSchema {
    type: 'Tuple';
    elementTypes: TSBufferSchema[];
}