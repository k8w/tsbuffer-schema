import { BaseSchema } from '../BaseSchema';
import { TSBufferSchema } from '../TSBufferSchema';

export interface IntersectionTypeSchema extends BaseSchema {
    type: 'Intersection';
    members: {
        id: number,
        type: TSBufferSchema
    }[];
}