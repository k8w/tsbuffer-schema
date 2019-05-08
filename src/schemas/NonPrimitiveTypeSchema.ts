import { BaseSchema } from '../BaseSchema';

/**
 * let a: object;
 */
export interface NonPrimitiveTypeSchema extends BaseSchema {
    type: 'NonPrimitive';
}