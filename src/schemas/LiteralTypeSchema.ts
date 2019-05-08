import { BaseSchema } from '../BaseSchema';

/**
 * Include never type
 */
export interface LiteralTypeSchema extends BaseSchema {
    type: 'Literal';
    // 未定义等同于undefined
    literal?: string | number | boolean | null | undefined;
}