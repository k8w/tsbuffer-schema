import { BaseSchema } from '../BaseSchema';
import { TSBufferSchema } from '../TSBufferSchema';
import { ReferenceTypeSchema } from './ReferenceTypeSchema';

export interface InterfaceTypeSchema extends BaseSchema {
    type: 'Interface';

    /** 继承自哪个interface */
    extends?: {
        id: number,
        type: ReferenceTypeSchema
    }[],

    properties?: {
        id: number,
        name: string,
        /** 可选字段 */
        optional?: boolean,
        type: TSBufferSchema
    }[];

    /**
     * 索引签名
     * 为空则代表没有
     * { [key: string]: xxx }
     */
    indexSignature?: {
        keyType: 'String' | 'Number',
        type: TSBufferSchema
    };
}