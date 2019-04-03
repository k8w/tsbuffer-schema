import BaseSchema from '../BaseSchema';
import TSBufferSchema from '../TSBufferSchema';

export default interface TupleTypeSchema extends BaseSchema {
    type: 'Tuple';
    valueTypes: {
        /** 编码标识 */
        id: number,
        type: TSBufferSchema
    }[];
}