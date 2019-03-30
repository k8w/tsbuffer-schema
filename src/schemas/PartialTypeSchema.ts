import BaseSchema from '../BaseSchema';
import InterfaceTypeSchema from './InterfaceTypeSchema';
import ReferenceTypeSchema from './ReferenceTypeSchema';

export default interface PartialTypeSchema extends BaseSchema {
    type: 'Partial';
    target: InterfaceTypeSchema | ReferenceTypeSchema;
}