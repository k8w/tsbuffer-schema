import BaseSchema from '../BaseSchema';
import TSBufferSchema from '../TSBufferSchema';

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
export default interface ReferenceTypeSchema extends BaseSchema {
    type: 'Reference';

    /**
     * import from where
     * undefined represents current file
     */
    importPath?: string;

    /**
     * name of target type
     */
    targetName: string;
}