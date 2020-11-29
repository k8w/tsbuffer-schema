import { TSBufferSchema } from '../TSBufferSchema';
import { InterfaceReference } from '../InterfaceReference';

export interface InterfaceTypeSchema {
    type: 'Interface';

    /** 继承自哪个interface */
    extends?: {
        id: number,
        type: InterfaceReference
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