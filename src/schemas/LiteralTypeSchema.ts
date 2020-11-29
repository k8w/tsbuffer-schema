/**
 * Include never type
 */
export interface LiteralTypeSchema {
    type: 'Literal';
    // 未定义等同于undefined
    literal?: string | number | boolean | null | undefined;
}