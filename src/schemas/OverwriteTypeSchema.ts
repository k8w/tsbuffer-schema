import { BaseSchema } from '../BaseSchema';
import { InterfaceTypeSchema } from './InterfaceTypeSchema';
import { InterfaceReference } from '../InterfaceReference';

/** equivalent to pick & overwrite */
export interface OverwriteTypeSchema extends BaseSchema {
    type: 'Overwrite';
    target: InterfaceTypeSchema | InterfaceReference;
    overwrite: InterfaceTypeSchema | InterfaceReference;
}