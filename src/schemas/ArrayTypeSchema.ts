import { TSBufferSchema } from '../TSBufferSchema';

export interface ArrayTypeSchema {
    type: 'Array';
    elementType: TSBufferSchema;
}