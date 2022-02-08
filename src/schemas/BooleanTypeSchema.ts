import { SchemaType } from "../models/SchemaType";

/**
 * Primitive `boolean` type
 * 
 * @example
 * ```ts
 * type A = boolean;
 * ```
 */
export interface BooleanTypeSchema {
    type: SchemaType.Boolean;
}