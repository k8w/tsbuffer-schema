import { InterfaceTypeSchema } from './InterfaceTypeSchema';
import { InterfaceReference } from '../InterfaceReference';
import { IntersectionTypeSchema } from './IntersectionTypeSchema';
import { UnionTypeSchema } from './UnionTypeSchema';

/** equivalent to pick & overwrite */
export interface OverwriteTypeSchema {
    type: 'Overwrite';
    target: InterfaceTypeSchema | InterfaceReference;
    overwrite: InterfaceTypeSchema | InterfaceReference | UnionTypeSchema | IntersectionTypeSchema;
}