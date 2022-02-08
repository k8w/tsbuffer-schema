import { SchemaType } from "../models/SchemaType";

/**
 * JavaScript `Date` type
 * 
 * @example
 * ```ts
 * type A = Date;
 * ```
 */
export interface DateTypeSchema {
    type: SchemaType.Date;
}