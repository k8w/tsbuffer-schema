import { BaseSchema } from '../BaseSchema';
import { InterfaceTypeSchema } from './InterfaceTypeSchema';
import { ReferenceTypeSchema } from './ReferenceTypeSchema';

/** equivalent to pick & overwrite */
export interface OverwriteTypeSchema extends BaseSchema {
    type: 'Overwrite';
    target: InterfaceTypeSchema | ReferenceTypeSchema;
    overwrite: InterfaceTypeSchema | ReferenceTypeSchema;
}