import { TypeReference } from "../models/TypeReference";

/** 
 * TypeScript `NonNullable<Type>`
 * 
 * @remarks
 * See: {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype}
 * 
 * @example
 * ```ts
 * type A = NonNullable<B>;
 * ```
 */
export interface NonNullableTypeSchema {
    type: 'NonNullable';
    /** 引用目标 */
    target: TypeReference;
}