import { ReferenceTypeSchema } from './schemas/ReferenceTypeSchema';
import { PickTypeSchema } from './schemas/PickTypeSchema';
import { PartialTypeSchema } from './schemas/PartialTypeSchema';
import { OverwriteTypeSchema } from './schemas/OverwriteTypeSchema';
import { OmitTypeSchema } from './schemas/OmitTypeSchema';

export type InterfaceReference = ReferenceTypeSchema | PickTypeSchema | PartialTypeSchema | OverwriteTypeSchema | OmitTypeSchema;