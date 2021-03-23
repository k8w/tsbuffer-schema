import { InterfaceTypeSchema } from './InterfaceTypeSchema';
import { InterfaceReference } from '../models/InterfaceReference';
import { IntersectionTypeSchema } from './IntersectionTypeSchema';
import { UnionTypeSchema } from './UnionTypeSchema';

/** equivalent to PickType */
export interface OmitTypeSchema {
    type: 'Omit';
    target: InterfaceTypeSchema | InterfaceReference | UnionTypeSchema | IntersectionTypeSchema;
    keys: string[];
}