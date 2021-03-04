import { TSBufferSchema } from '../TSBufferSchema';

export interface IntersectionTypeSchema {
    type: 'Intersection';
    members: {
        id: number,
        type: TSBufferSchema
    }[];
}