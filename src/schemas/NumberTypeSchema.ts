import { BaseSchema } from '../BaseSchema';

export interface NumberTypeSchema extends BaseSchema {
    type: 'Number';
    /** 默认为float64 */
    scalarType?: 'int32' | 'int64' | 'uint32' | 'uint64' | 'sint32' | 'sint64' | 'fixed32' | 'fixed64' | 'sfixed32' | 'sfixed64' | 'float' | 'double';
}