import { InterfaceTypeSchema } from './InterfaceTypeSchema';
import { InterfaceReference } from '../models/InterfaceReference';
import { IntersectionTypeSchema } from './IntersectionTypeSchema';
import { UnionTypeSchema } from './UnionTypeSchema';

/**
 * TypeScript Partial Type
 * 
 * @see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype}
 */
export interface PartialTypeSchema {
    type: 'Partial';
    target: InterfaceTypeSchema | InterfaceReference | UnionTypeSchema | IntersectionTypeSchema;
}