(Type) 代表分类
[Type] 代表暂不支持

# Types

## Design

- *(BasicType)*
    - **BooleanType**
    - **NumberType**
        - [u]int8~64, float32/64
    - **StringType**
    - **ArrayType**
    - **TupleType**
    - **EnumType**
    - **AnyType**
    - **LiteralType**
        - null
        - undefined
        - string
        - number
        - boolean
        - never (等同于undefined)
    - **NonPrimitiveType**
    - **InterfaceType**
- [NEW] **ArrayBufferType**
- **IndexedAccessType**
- **IndexSignatureType**
- **ReferenceType**
    - TypeReferenceType
    - ImportType
- *(LogicType)*
    - **UnionType**
    - **IntersectionType**
- [MappedType]
    - **PickType**
    - **PartialType**
    - [Required]    
- [ConditionalType] T extends U ? X : Y
    - **OmitType**
    - **OverwriteType**

## Output
- BooleanType
- NumberType
- StringType
- ArrayType
- TupleType
- EnumType
- AnyType
- LiteralType
- NonPrimitiveType
- ArrayBufferType
- IndexedAccessType
- IndexSignatureType
- ReferenceType
- UnionType
- IntersectionType
- PickType
- PartialType
- OmitType
- OverwriteType

---

# Features

- extends
- relative import
- *node_modules*
- ignore comments
- ? Optional
- -? Remove Optional
- namespace

## Not support
- Circular reference on flatMode

## 内置的Type（未确定）
```ts
/**
 * Make all properties in T optional
 */
type Partial<T> = {
    [P in keyof T]?: T[P];
};

/**
 * Make all properties in T required
 */
type Required<T> = {
    [P in keyof T]-?: T[P];
};

/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
    [P in K]: T;
};

/**
 * Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T;

/**
 * Extract from T those types that are assignable to U
 */
type Extract<T, U> = T extends U ? T : never;

/**
 * Exclude null and undefined from T
 */
type NonNullable<T> = T extends null | undefined ? never : T;

```