import BaseSchema from '../BaseSchema';

export default interface EnumTypeSchema extends BaseSchema {
    type: 'Enum';
    values: (string | number)[];
}