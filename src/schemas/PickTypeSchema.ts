import { InterfaceTypeSchema } from './InterfaceTypeSchema';
import { InterfaceReference } from '../InterfaceReference';

export interface PickTypeSchema {
    type: 'Pick';
    target: InterfaceTypeSchema | InterfaceReference;
    keys: string[];
}