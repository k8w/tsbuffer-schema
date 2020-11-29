import { InterfaceTypeSchema } from './InterfaceTypeSchema';
import { InterfaceReference } from '../InterfaceReference';
import { IntersectionTypeSchema } from './IntersectionTypeSchema';
import { UnionTypeSchema } from './UnionTypeSchema';

export interface PickTypeSchema {
    type: 'Pick';
    target: InterfaceTypeSchema | InterfaceReference | UnionTypeSchema | IntersectionTypeSchema;
    keys: string[];
}