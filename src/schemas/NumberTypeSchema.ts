/**
 * {@link https://www.typescriptlang.org/docs/handbook/basic-types.html#number}
 */
export interface NumberTypeSchema {
    type: 'Number';
    /** 
     * 默认为float64
     * bigint 默认对应uint64
     * 只有 x64 允许bigint
     */
    scalarType?: 'int' | 'uint' | 'bigint' | 'bigint64' | 'biguint64' | 'double';
}

// Scalar Types
// Varint Encoding
/** Encoded as {@link https://developers.google.com/protocol-buffers/docs/encoding#varints | Varint} */
export type int = number;
/** Encoded as {@link https://developers.google.com/protocol-buffers/docs/encoding#varints | Varint} */
export type uint = number;
// Fixed Length (64bits) Encoding
/** Encoded as 64-bit `double` type */
export type double = number;
/** Encoded as 64-bit `int64` */
export type bigint64 = bigint;
/** Encoded as 64-bit `uint64` */
export type biguint64 = bigint;