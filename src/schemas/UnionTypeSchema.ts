import { TSBufferSchema } from '../TSBufferSchema';

export interface UnionTypeSchema {
    type: 'Union';
    members: {
        /** 对应条件MASK第几位 */
        id: number,
        type: TSBufferSchema
    }[];
}