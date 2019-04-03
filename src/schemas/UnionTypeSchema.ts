import BaseSchema from '../BaseSchema';
import TSTypeSchema from '../TSTypeSchema';

export default interface UnionTypeSchema extends BaseSchema {
    type: 'Union';
    members: {
        /** 对应条件MASK第几位 */
        id: number,
        type: TSTypeSchema
    }[];
}