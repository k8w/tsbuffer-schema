const TSTypeId = {
    // #region 确定的TypeScript的类型
    Boolean: 1,
    Number: 2,
    String: 3,
    Array: 4,
    Tuple: 5,
    Enum: 6,
    Any: 7,
    Literal: 8,
    NonPrimitive: 9,
    Interface: 10,
    ArrayBuffer: 11,
    IndexedAccess: 12,
    Reference: 13,
    Union: 14,
    Intersection: 15,
    // #endregion

    // #region 非TypeScript基本类型，临时过渡用
    Pick: 101,
    Partial: 102,
    Omit: 103,
    Overwrite: 104,
    // #endregion
}
export default TSTypeId;