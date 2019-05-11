import { BaseSchema } from '../BaseSchema';
import { InterfaceTypeSchema } from './InterfaceTypeSchema';
import { InterfaceReference } from '../InterfaceReference';

export interface PickTypeSchema extends BaseSchema {
    type: 'Pick';
    target: InterfaceTypeSchema | InterfaceReference;
    keys: string[];
}