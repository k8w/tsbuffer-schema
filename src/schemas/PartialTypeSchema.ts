import { InterfaceTypeSchema } from './InterfaceTypeSchema';
import { InterfaceReference } from '../InterfaceReference';

export interface PartialTypeSchema {
    type: 'Partial';
    target: InterfaceTypeSchema | InterfaceReference;
}