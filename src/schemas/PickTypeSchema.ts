import BaseSchema from '../BaseSchema';
import InterfaceTypeSchema from './InterfaceTypeSchema';
import ReferenceTypeSchema from './ReferenceTypeSchema';

export default interface PickTypeSchema extends BaseSchema {
    type: 'Pick';
    target: InterfaceTypeSchema | ReferenceTypeSchema;
    keys: string[];
}