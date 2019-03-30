import BaseSchema from '../BaseSchema';
import ReferenceTypeSchema from './ReferenceTypeSchema';
import LiteralTypeSchema from './LiteralTypeSchema';
import UnionTypeSchema from './UnionTypeSchema';

/**
 * Reference like XXX['XX']
 */
export default interface IndexedAccessTypeSchema extends BaseSchema {
    type: 'IndexedAccess';
    objectType: ReferenceTypeSchema;
    index: LiteralTypeSchema | UnionTypeSchema;
}