import BaseSchema from '../BaseSchema';
import TSTypeSchema from '../TSTypeSchema';
import ReferenceTypeSchema from './ReferenceTypeSchema';

export default interface InterfaceTypeSchema extends BaseSchema {
    type: 'Interface';

    /** 继承自哪个interface */
    extends?: ReferenceTypeSchema,

    fields: {
        id: number,
        name: string,
        type: TSTypeSchema
    }[];

    /**
     * 索引签名
     * 为空则代表没有
     * { [key: string]: xxx }
     */
    indexSignature?: TSTypeSchema;
}