import { InterfaceTypeSchema } from './InterfaceTypeSchema';
import { InterfaceReference } from '../InterfaceReference';

/** equivalent to PickType */
export interface OmitTypeSchema {
    type: 'Omit';
    target: InterfaceTypeSchema | InterfaceReference;
    keys: string[];
}