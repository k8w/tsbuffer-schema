import { BaseSchema } from '../BaseSchema';

/**
 * 有namespace的情况
 * 
 * import { MyNS } from './myns';
 * type MyType2 = MyNS.MyType;
 * 
 * MyType2 ↓
 * importPath: './myns'
 * targetName: 'MyNS.MyType'
 * 
 * 查找引用时，如果targetName没有小数点，直接查Type；如果有小数点，则以小数点隔开查namespace，知道最后一位查Type
 */
export interface ReferenceTypeSchema extends BaseSchema {
    type: 'Reference';

    /** 引用目标的SchemaID */
    target: string;
}