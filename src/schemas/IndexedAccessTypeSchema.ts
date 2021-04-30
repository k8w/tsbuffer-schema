import { InterfaceReference } from '../models/InterfaceReference';
import { InterfaceTypeSchema } from './InterfaceTypeSchema';

/**
 * TypeScript Indexed Access Type
 * 
 * @remarks 
 * `XXX['a' | 'b']` is not a `IndexedAccessType`, which should be a `{@link UnionType}`. 
 * (Equivalent to `XXX['a'] | XXX['b']`)
 * 
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html}
 * 
 * @example
 * ```ts
 * type A = SomeInterface['XXX']
 * ```
 */
export interface IndexedAccessTypeSchema {
    type: 'IndexedAccess';
    objectType: InterfaceTypeSchema | InterfaceReference;
    index: string;
}