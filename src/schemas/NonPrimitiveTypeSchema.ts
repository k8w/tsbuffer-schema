import BaseSchema from '../BaseSchema';

/**
 * let a: object;
 */
export default interface NonPrimitiveTypeSchema extends BaseSchema {
    type: 'NonPrimitive';
}