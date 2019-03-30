import BaseSchema from '../BaseSchema';
import TSTypeSchema from '../TSTypeSchema';

export default interface UnionTypeSchema extends BaseSchema {
    type: 'Union';
    members: TSTypeSchema[];
}