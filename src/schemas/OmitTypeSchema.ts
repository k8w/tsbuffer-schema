import BaseSchema from '../BaseSchema';
import InterfaceTypeSchema from './InterfaceTypeSchema';
import ReferenceTypeSchema from './ReferenceTypeSchema';

/** equivalent to PickType */
export default interface OmitTypeSchema extends BaseSchema {
    type: 'Omit';
    target: InterfaceTypeSchema | ReferenceTypeSchema;
    omitFields: string[];
}