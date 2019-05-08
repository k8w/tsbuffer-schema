import { BaseSchema } from '../BaseSchema';
import { TSBufferSchema } from '../TSBufferSchema';

export interface UnionTypeSchema extends BaseSchema {
    type: 'Union';
    members: {
        /** 对应条件MASK第几位 */
        id: number,
        type: TSBufferSchema
    }[];
}