import BaseSchema from '../BaseSchema';
import TSTypeSchema from '../TSTypeSchema';

export default interface TupleTypeSchema extends BaseSchema {
    type: 'Tuple';
    valueTypes: TSTypeSchema[];
}