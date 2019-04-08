import BaseSchema from '../BaseSchema';
import ReferenceTypeSchema from './ReferenceTypeSchema';
import LiteralTypeSchema from './LiteralTypeSchema';
import UnionTypeSchema from './UnionTypeSchema';

/**
 * Reference like XXX['XX']['XX']
 * 注意 A['b' | 'c']不是IndexedAccessType，它们应该作为一个 UnionType被识别
 * 应该等价于 A['b'] | A['c']
 */
export default interface IndexedAccessTypeSchema extends BaseSchema {
    type: 'IndexedAccess';
    objectType: ReferenceTypeSchema | IndexedAccessTypeSchema;
    index: string;
}

interface A {
    a: { a: string; }
    b: { b: string; }
    c: { c: string; }
}

type Test = A['a' | 'b' | 'c']