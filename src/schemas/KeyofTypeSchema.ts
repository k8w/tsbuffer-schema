import { InterfaceReference } from "../models/InterfaceReference";
import { SchemaType } from "../models/SchemaType";

/**
 * TypeScript `keyof` feature, to get keys of an interface.
 * 
 * @remarks
 * Type:
 * ```ts
 * interface ABC { a: string; b: string }
 * type Keys = keyof ABC;
 * ```
 * 
 * Schema:
 * ```json
 * {
 *     type: "keys",
 *     target: {
 *         type: "Reference",
 *         target: "ABC"
 *     }
 * }
 * ```
 */
export interface KeyofTypeSchema {
    type: SchemaType.Keyof;
    target: InterfaceReference;
}