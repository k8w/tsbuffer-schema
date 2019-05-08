import { BaseSchema } from '../BaseSchema';
import { TSBufferSchema } from '../TSBufferSchema';

export interface ArrayTypeSchema extends BaseSchema {
    type: 'Array';
    elementType: TSBufferSchema;
}