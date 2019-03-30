import BaseSchema from '../BaseSchema';
import TSTypeSchema from '../TSTypeSchema';

export default interface ArrayTypeSchema extends BaseSchema {
    type: 'Array';
    itemType: TSTypeSchema;
}