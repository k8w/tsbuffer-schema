/**
 * TypeScript Object Type
 * Represents anything that is not `number`, `string`, `boolean`, `bigint`, `symbol`, `null`, or `undefined`.
 * NOTICE: Both `Object` and `Array` is valid.
 * 
 * @see {@link https://www.typescriptlang.org/docs/handbook/basic-types.html#object}
 * 
 * @example
 * ```ts
 * let a: object;
 * ```
 * 
 */
export interface ObjectTypeSchema {
    type: 'Object';
}