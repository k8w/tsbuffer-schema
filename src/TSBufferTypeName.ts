type TSBufferTypeName =
    'Boolean' |
    'Number' |
    'String' |
    'Array' |
    'Tuple' |
    'Enum' |
    'Any' |
    'Literal' |
    'NonPrimitive' |
    'Interface' |
    'Buffer' |
    'IndexedAccess' |
    'Reference' |
    'Union' |
    'Intersection' |
    // #endregion

    // #region 非TypeScript基本类型，临时过渡用
    'Pick' |
    'Partial' |
    'Omit' |
    'Overwrite';
export default TSBufferTypeName;