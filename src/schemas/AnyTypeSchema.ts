import { SchemaType } from "../models/SchemaType";

/** 
 * TypeScript `any` type
 * 
 * @remarks 
 * See: {@link https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any}
 * 
 * @example
 * ```ts
 * type XXX = any;
 * ```
 */
export interface AnyTypeSchema {
    type: SchemaType.Any;
}