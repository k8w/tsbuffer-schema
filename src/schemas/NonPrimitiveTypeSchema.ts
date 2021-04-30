/**
 * TypeScript Object Type
 * Represents anything that is not `number`, `string`, `boolean`, `bigint`, `symbol`, `null`, or `undefined`.
 * 
 * @see {@link https://www.typescriptlang.org/docs/handbook/basic-types.html#object}
 * 
 * @example
 * ```ts
 * let a: object;
 * ```
 * 
 */
export interface NonPrimitiveTypeSchema {
    type: 'NonPrimitive';
}