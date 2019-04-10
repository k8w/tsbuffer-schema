import BaseSchema from '../BaseSchema';

export default interface BufferTypeSchema extends BaseSchema {
    type: 'Buffer';
    /**
     * 有该字段，代表类型为该字段对应的TypedArray，否则该字段为ArrayBuffer
     */
    arrayType?: 'Int8Array' | 'Int16Array' | 'Int32Array' | 'BigInt64Array' | 'Uint8Array' | 'Uint16Array' | 'Uint32Array' | 'BigUint64Array' | 'Float32Array' | 'Float64Array'
}