import BaseSchema from '../BaseSchema';

/**
 * Include never type
 */
export default interface LiteralTypeSchema extends BaseSchema {
    type: 'Literal';
    value: string | number | boolean | null | undefined;
}