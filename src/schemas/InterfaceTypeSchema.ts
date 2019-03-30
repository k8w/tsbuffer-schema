import BaseSchema from '../BaseSchema';
import TSTypeSchema from '../TSTypeSchema';

export default interface InterfaceTypeSchema extends BaseSchema {
    type: 'Interface';
    fields: {
        id: number,
        name: string,
        type: TSTypeSchema
    }[];
}