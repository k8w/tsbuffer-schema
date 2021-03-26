export interface NumberTypeSchema {
    type: 'Number';
    /** 
     * 默认为float64
     * bigint 默认对应uint64
     * 只有 x64 允许bigint
     */
    scalarType?: 'int' | 'uint' | 'bigint' | 'bigint64' | 'biguint64' | 'double';
}

declare global {
    // Varint Encoding
    type int = number;
    type uint = number;

    // Fixed Length Encoding
    type double = number;
    type bigint64 = bigint;
    type biguint64 = bigint;
}