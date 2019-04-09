import BaseSchema from '../BaseSchema';
import TSBufferSchema from '../TSBufferSchema';
import ReferenceTypeSchema from './ReferenceTypeSchema';

export default interface InterfaceTypeSchema extends BaseSchema {
    type: 'Interface';

    /** 继承自哪个interface */
    extends?: ReferenceTypeSchema,

    properties: {
        id: number,
        name: string,
        type: TSBufferSchema
    }[];

    /**
     * 索引签名
     * 为空则代表没有
     * { [key: string]: xxx }
     */
    indexSignature?: TSBufferSchema;
}