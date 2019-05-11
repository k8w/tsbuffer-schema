import { BaseSchema } from '../BaseSchema';
import { InterfaceTypeSchema } from './InterfaceTypeSchema';
import { InterfaceReference } from '../InterfaceReference';

/** equivalent to PickType */
export interface OmitTypeSchema extends BaseSchema {
    type: 'Omit';
    target: InterfaceTypeSchema | InterfaceReference;
    keys: string[];
}