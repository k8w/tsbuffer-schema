import BaseSchema from '../BaseSchema';
import TSBufferSchema from '../TSBufferSchema';

export default interface ArrayTypeSchema extends BaseSchema {
    type: 'Array';
    itemType: TSBufferSchema;
}