import { BaseSchema } from '../BaseSchema';
import { InterfaceTypeSchema } from './InterfaceTypeSchema';
import { ReferenceTypeSchema } from './ReferenceTypeSchema';

export interface PartialTypeSchema extends BaseSchema {
    type: 'Partial';
    target: InterfaceTypeSchema | ReferenceTypeSchema;
}