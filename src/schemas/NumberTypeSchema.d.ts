export interface NumberTypeSchema {
    type: 'Number';
    /** 
     * 默认为float64
     * bigint 默认对应uint64
     * 只有 x64 允许bigint
     */
    scalarType?: 'int' | 'uint' | 'bigint' | 'bigint64' | 'biguint64' | 'double';
}