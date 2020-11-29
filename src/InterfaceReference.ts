import { PickTypeSchema } from './schemas/PickTypeSchema';
import { PartialTypeSchema } from './schemas/PartialTypeSchema';
import { OverwriteTypeSchema } from './schemas/OverwriteTypeSchema';
import { OmitTypeSchema } from './schemas/OmitTypeSchema';
import { TypeReference } from './TypeReference';
import { IntersectionTypeSchema } from './schemas/IntersectionTypeSchema';
import { UnionTypeSchema } from './schemas/UnionTypeSchema';

export type InterfaceReference = TypeReference | PickTypeSchema | PartialTypeSchema | OverwriteTypeSchema | OmitTypeSchema | UnionTypeSchema | IntersectionTypeSchema;