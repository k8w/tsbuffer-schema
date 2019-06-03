import { BaseSchema } from '../BaseSchema';

export interface NumberTypeSchema extends BaseSchema {
    type: 'Number';
    /** 
     * 默认为float64
     * bigint 默认对应uint64
     * 只有 x64 允许bigint
     */
    scalarType?: 'int' | 'uint' | 'bigint' | 'int32' | 'uint32' | 'bigint64' | 'biguint64' | 'float' | 'double';
}