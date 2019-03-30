import BaseSchema from '../BaseSchema';

export default interface EnumTypeSchema extends BaseSchema {
    type: 'Enum';
    values: {
        /** 序列化用 */
        id: number,
        value: string | number
    }[];
}