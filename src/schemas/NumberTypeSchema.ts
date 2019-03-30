import BaseSchema from '../BaseSchema';

export default interface NumberTypeSchema extends BaseSchema {
    type: 'Number';
    /** 默认为float64 */
    scalarType?: 'int8' | 'int16' | 'int32' | 'int64' | 'uint8' | 'uint16' | 'uint32' | 'uint64' | 'float32' | 'float64';
}