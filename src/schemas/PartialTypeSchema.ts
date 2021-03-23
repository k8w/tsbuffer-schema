import { InterfaceTypeSchema } from './InterfaceTypeSchema';
import { InterfaceReference } from '../models/InterfaceReference';
import { IntersectionTypeSchema } from './IntersectionTypeSchema';
import { UnionTypeSchema } from './UnionTypeSchema';

export interface PartialTypeSchema {
    type: 'Partial';
    target: InterfaceTypeSchema | InterfaceReference | UnionTypeSchema | IntersectionTypeSchema;
}