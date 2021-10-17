/**
 * Enum for every possible `TSBufferSchema['type']`
 */
export enum SchemaType {
    // #region 确定的TypeScript的类型
    Boolean = 'Boolean',
    Number = 'Number',
    String = 'String',
    Array = 'Array',
    Tuple = 'Tuple',
    Enum = 'Enum',
    Any = 'Any',
    Literal = 'Literal',
    Object = 'Object',
    Interface = 'Interface',
    Buffer = 'Buffer',
    IndexedAccess = 'IndexedAccess',
    Reference = 'Reference',
    Union = 'Union',
    Intersection = 'Intersection',
    NonNullable = 'NonNullable',
    Date = 'Date',
    // #endregion

    // #region 非TypeScript基本类型，临时过渡用
    Pick = 'Pick',
    Partial = 'Partial',
    Omit = 'Omit',
    Overwrite = 'Overwrite',
    // #endregion

    Custom = 'Custom'
}