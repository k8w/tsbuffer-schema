import { InterfaceTypeSchema } from './InterfaceTypeSchema';
import { InterfaceReference } from '../models/InterfaceReference';
import { SchemaType } from '../models/SchemaType';

/**
 * TSBuffer utility type, which represents overwrite some properties from a interface.
 * 
 * @example
 * ```ts
 * import { Overwrite } from 'tsbuffer-schema';
 * 
 * interface AAA {
 *     a: string,
 *     b: string
 * }
 * 
 * // Equivalent to `{ a: string, b: number, c: number }`
 * type BBB = Overwrite<AAA, {
 *     b: number,
 *     c: number
 * }>
 * ```
 */
export interface OverwriteTypeSchema {
    type: SchemaType.Overwrite;
    target: InterfaceTypeSchema | InterfaceReference;
    overwrite: InterfaceTypeSchema | InterfaceReference;
}

/**
 * Overwrite some properties from a interface
 */
export type Overwrite<T, U> = T extends unknown ? Pick<T, Exclude<keyof T, keyof U>> & U : never;