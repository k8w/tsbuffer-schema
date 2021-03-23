import { InterfaceTypeSchema } from './InterfaceTypeSchema';
import { InterfaceReference } from '../models/InterfaceReference';

/** equivalent to pick & overwrite */
export interface OverwriteTypeSchema {
    type: 'Overwrite';
    target: InterfaceTypeSchema | InterfaceReference;
    overwrite: InterfaceTypeSchema | InterfaceReference;
}