import { BaseSchema } from '../BaseSchema';
import { InterfaceTypeSchema } from './InterfaceTypeSchema';
import { InterfaceReference } from '../InterfaceReference';

export interface PartialTypeSchema extends BaseSchema {
    type: 'Partial';
    target: InterfaceTypeSchema | InterfaceReference;
}