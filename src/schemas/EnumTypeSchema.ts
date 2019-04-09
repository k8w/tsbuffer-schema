import BaseSchema from '../BaseSchema';

export default interface EnumTypeSchema extends BaseSchema {
    type: 'Enum';
    members: {
        /** 序列化用 */
        id: number,
        value: string | number
    }[];
}