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
export type int = number;
export type uint = number;
// Fixed Length (64bits) Encoding
export type double = number;
export type bigint64 = bigint;
export type biguint64 = bigint;