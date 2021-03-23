import { TSBufferSchema } from "../models/TSBufferSchema";

export interface IntersectionTypeSchema {
    type: 'Intersection';
    members: {
        id: number,
        type: TSBufferSchema
    }[];
}